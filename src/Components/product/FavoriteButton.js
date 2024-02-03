import React, { useState } from 'react';

const FavoriteButton = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would also handle the API call to update the favorite status
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;



