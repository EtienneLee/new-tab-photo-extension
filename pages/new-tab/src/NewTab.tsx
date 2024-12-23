/// <reference types="vite/client" />
import '@src/NewTab.css';
import React, { useState, useEffect } from 'react';
import { withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';
import { StoredPhoto } from '../../options/src/types';

const NewTab: React.FC = () => {
  const [storedPhotos, setStoredPhotos] = useState<StoredPhoto[]>([]);
  const [currentPhoto, setCurrentPhoto] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Load photos from storage on mount
    const loadPhotos = async () => {
      const result = await chrome.storage.local.get(['photos']);
      const photos = result.photos || [];
      setStoredPhotos(photos);

      if (photos.length > 0) {
        // Select random initial photo
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        setCurrentPhoto(randomPhoto.dataUrl);
      }
    };

    loadPhotos();
  }, []);

  const getRandomPhoto = () => {
    if (storedPhotos.length === 0) return '';
    const randomIndex = Math.floor(Math.random() * storedPhotos.length);
    return storedPhotos[randomIndex].dataUrl;
  };

  const changePhoto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhoto(getRandomPhoto());
      setIsTransitioning(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="new-tab-container">
      {storedPhotos.length > 0 ? (
        <img src={currentPhoto} alt="Random" className={`photo-display ${isTransitioning ? 'fade-out' : ''}`} />
      ) : (
        <div className="no-photos-message">No photos available. Add some photos in the extension!</div>
      )}

      {storedPhotos.length > 0 && (
        <button onClick={changePhoto} className="change-photo-button">
          Change Photo
        </button>
      )}

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search Google"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default withErrorBoundary(withSuspense(NewTab, <div>Loading...</div>), <div>Error Occur</div>);
