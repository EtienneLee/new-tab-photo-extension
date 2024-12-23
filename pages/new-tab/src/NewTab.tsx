/// <reference types="vite/client" />
import '@src/NewTab.css';
import React, { useState, useEffect } from 'react';
import { withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';

// Import Image files from assets folder
const imageFiles: Record<string, string> = import.meta.glob('./assets/*', {
  eager: true,
  as: 'url',
});

// Obtain Photo array from image files
const photos: string[] = Object.entries(imageFiles)
  .filter(([path]) => /\.(jpe?g|png)$/i.test(path))
  .map(([, url]) => url);

const NewTab: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getRandomPhoto = () => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
  };

  const changePhoto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhoto(getRandomPhoto());
      setIsTransitioning(false);
    }, 500); // This should match the transition duration in CSS
  };

  useEffect(() => {
    setCurrentPhoto(getRandomPhoto());
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="new-tab-container">
      <img src={currentPhoto} alt="Random" className={`photo-display ${isTransitioning ? 'fade-out' : ''}`} />
      <button onClick={changePhoto} className="change-photo-button">
        Change Photo
      </button>
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

export default withErrorBoundary(withSuspense(NewTab, <div> Loading ... </div>), <div> Error Occur </div>);
