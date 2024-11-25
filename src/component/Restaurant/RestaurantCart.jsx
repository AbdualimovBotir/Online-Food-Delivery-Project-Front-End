import React from 'react';
import { Card, IconButton, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCart = () => {
  const isOpen = true; // Restaurant is open
  const isFavorite = true; // User favorite status
  const imageUrl =
    'https://media.istockphoto.com/id/1457868493/photo/a-blond-female-professional-bartender-is-cleaning-glass-in-a-bar-while-standing-behind-a-bar.jpg?s=1024x1024&w=is&k=20&c=HcHz6i4xtNUtRRIpiKZyJqjvMgt7CQakQACt6mao1j0='; // Example image

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '26rem', // Limit the width of each card
        borderRadius: '14px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)', // Hover effect
        },
      }}
      className="restaurant-card" // Class to apply for styling
    >
      <div
        className={`${
          isOpen ? 'cursor-pointer' : 'cursor-not-allowed'
        } relative`}
      >
        <img
          className="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] object-cover"
          src={imageUrl}
          alt="Restaurant Interior"
        />
        <Chip
          size="small"
          sx={{ position: 'absolute', top: '8px', left: '8px' }}
          color={isOpen ? 'success' : 'error'}
          label={isOpen ? 'Open' : 'Closed'}
        />
      </div>
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="space-y-2 sm:space-y-1 sm:text-left text-center">
          <p className="font-semibold text-lg text-gray-900">Uzbek Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into our global flavors...
          </p>
        </div>
        <div>
          <IconButton color="error">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCart;
