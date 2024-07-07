/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import '@src/Options.css';
import { withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';

interface PhotoData {
  url: string;
  date: string;
}

const Options: React.FC = () => {
  const [userPhotos, setUserPhotos] = useState<PhotoData[]>([]);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  const handleImageClick = (url: string) => {
    setExpandedImage(url);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const loadPhotos = () => {
    chrome.storage.local.get({ userPhotos: [] }, result => {
      setUserPhotos(result.userPhotos);
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filePromises = Array.from(files).map(file => {
        return new Promise<PhotoData>(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            resolve({
              url: e.target?.result as string,
              date: new Date().toISOString().split('T')[0],
            });
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(filePromises).then(newPhotos => {
        chrome.storage.local.get({ userPhotos: [] }, result => {
          const updatedPhotos = [...result.userPhotos, ...newPhotos];
          chrome.storage.local.set({ userPhotos: updatedPhotos }, () => {
            setUserPhotos(updatedPhotos);
          });
        });
      });
    }
  };

  const deletePhoto = (index: number) => {
    const updatedPhotos = userPhotos.filter((_, i) => i !== index);
    chrome.storage.local.set({ userPhotos: updatedPhotos }, () => {
      setUserPhotos(updatedPhotos);
    });
  };

  const deleteAllPhotos = () => {
    if (window.confirm('Are you sure you want to delete all photos? This action cannot be undone.')) {
      chrome.storage.local.set({ userPhotos: [] }, () => {
        setUserPhotos([]);
      });
    }
  };

  return (
    <div className="options-container">
      <h1 className="options-title">Customize Your Photo Collection</h1>
      <div className="options-actions">
        <div className="upload-section">
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose Photos
          </label>
          <input id="file-upload" type="file" accept="image/*" multiple onChange={handleFileUpload} />
        </div>
        {userPhotos.length > 0 && (
          <button onClick={deleteAllPhotos} className="delete-all-button">
            Delete All Photos
          </button>
        )}
      </div>
      <div className="photo-gallery">
        {userPhotos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.url} alt={`User photo ${index}`} onClick={() => handleImageClick(photo.url)} />
            <button onClick={() => deletePhoto(index)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className="expanded-image-overlay" onClick={closeExpandedImage}>
          <img src={expandedImage} alt="Expanded view" />
        </div>
      )}
    </div>
  );
};

export default withErrorBoundary(withSuspense(Options, <div> Loading ... </div>), <div> Error Occurred </div>);
