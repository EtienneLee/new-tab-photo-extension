import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { StoredPhoto } from './types';

interface DeletePhotoButtonProps {
  photoId: string;
  onDeleteSuccess?: () => void; // Callback for parent component
}

export const DeletePhotoButton: React.FC<DeletePhotoButtonProps> = ({ photoId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this photo?');

    if (!confirmed) return;

    try {
      // Confirmed delete
      // Get current photos
      const result = await chrome.storage.local.get(['photos']);
      const currentPhotos = result.photos || [];

      // Filter out the photo to delete
      const updatedPhotos = currentPhotos.filter((photo: StoredPhoto) => photo.id !== photoId);

      // Save updated photos back to storage
      await chrome.storage.local.set({ photos: updatedPhotos });

      if (onDeleteSuccess) {
        // Photo has been deleted so callback success
        onDeleteSuccess();
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
      title="Delete photo">
      <BiTrash size={20} />
    </button>
  );
};
