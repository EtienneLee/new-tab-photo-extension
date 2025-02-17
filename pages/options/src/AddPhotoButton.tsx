import { StoredPhoto } from './types';
import styles from './AddPhotoButton.module.css';

export const AddPhotoButton = () => {
  // Main function that triggers when files are selected
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // Get current photos first before adding everything
    chrome.storage.local.get(['photos'], result => {
      const currentPhotos: StoredPhoto[] = result.photos || [];
      let processedPhotos = 0;
      const newPhotos: StoredPhoto[] = [];

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          const dataUrl = e.target?.result as string;

          // Push each photo into new photos array to add all at once later
          newPhotos.push({
            id: crypto.randomUUID(),
            dataUrl,
            name: file.name,
            dateAdded: Date.now(),
          });

          processedPhotos++;

          // Only update storage after ALL files are processed
          if (processedPhotos === files.length) {
            // Use counter because async, alt promises
            const updatedPhotos = [...currentPhotos, ...newPhotos];
            chrome.storage.local.set({ photos: updatedPhotos });
          }
        };

        reader.readAsDataURL(file);
      });
    });
  };

  return (
    // File input into button for better visual
    <div className={styles.uploadContainer}>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <button className={styles.uploadButton} onClick={() => document.getElementById('fileInput')?.click()}>
        + Add Photos
      </button>
    </div>
  );
};
