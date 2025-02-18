// options.tsx
import { useEffect, useState } from 'react';
import { StoredPhoto } from './types';
import { AddPhotoButton } from './AddPhotoButton';
import { DeletePhotoButton } from './DeletePhotoButton';
import { DeleteAllButton } from './DeleteAllButton';
import styles from './Options.module.css';

export const Options = () => {
  const [photos, setPhotos] = useState<StoredPhoto[]>([]); // Photo Array

  useEffect(() => {
    loadPhotos(); // Initial load of photos into photo array
    // Listener that activates when storage changes (Photo added or removed)
    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => chrome.storage.onChanged.removeListener(handleStorageChange);
  }, []);

  const loadPhotos = () => {
    chrome.storage.local.get(['photos'], result => {
      console.log('Loaded photos count:', result.photos?.length || 0); // Debugging log
      setPhotos(result.photos || []);
    });
  };

  const handleStorageChange = (changes: { [key: string]: chrome.storage.StorageChange }) => {
    if (changes.photos) {
      console.log('Storage changed. New photo count:', changes.photos.newValue?.length || 0); // Debugging log 2
      setPhotos(changes.photos.newValue || []);
    }
  };

  return (
    <div className={styles.optionsContainer}>
      <h1 className={styles.title}>Photo Gallery</h1>
      <div className={styles.statsBar}>
        <span>Total Photos: {photos.length}</span>
      </div>

      <div className={styles.actionButtons}>
        <AddPhotoButton />
        <DeleteAllButton onDeleteSuccess={loadPhotos} />
      </div>

      <div className={styles.photoGrid}>
        {photos.length === 0 ? (
          <p className={styles.noPhotos}>No photos yet. Add some!</p>
        ) : (
          photos.map(photo => (
            <div key={photo.id} className={styles.photoCard}>
              <img src={photo.dataUrl} alt={photo.name} />
              <div className={styles.photoCardFooter}>
                <p className={styles.photoName}>{photo.name}</p>
                <DeletePhotoButton photoId={photo.id} onDeleteSuccess={loadPhotos} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
