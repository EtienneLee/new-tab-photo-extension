import React from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import styles from './DeleteAllButton.module.css';

interface DeleteAllButtonProps {
  onDeleteSuccess?: () => void; // Callback
}

export const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({ onDeleteSuccess }) => {
  const handleDeleteAll = async () => {
    const confirmed = window.confirm('Are you sure you want to delete all photos?');

    if (!confirmed) return;

    try {
      // Empty out photo array
      await chrome.storage.local.set({ photos: [] });

      if (onDeleteSuccess) {
        // Success callback
        onDeleteSuccess();
      }
    } catch (error) {
      console.error('Error deleting all photos:', error);
    }
  };

  return (
    <div className={styles.deleteContainer}>
      <button onClick={handleDeleteAll} className={styles.deleteButton} title="Delete all photos">
        <BiTrashAlt size={20} />
        Delete All
      </button>
    </div>
  );
};
