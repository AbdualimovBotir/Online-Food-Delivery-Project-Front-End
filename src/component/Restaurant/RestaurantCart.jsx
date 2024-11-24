import React from 'react';
import { Card, IconButton, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCart = () => {
  const isOpen = true; // Restaurantning ochiqligini bildiradi
  const isFavorite = true; // Foydalanuvchi yoqtirgan yoki yo'qligini bildiradi
  const imageUrl =
    'https://media.istockphoto.com/id/1457868493/photo/a-blond-female-professional-bartender-is-cleaning-glass-in-a-bar-while-standing-behind-a-bar.jpg?s=1024x1024&w=is&k=20&c=HcHz6i4xtNUtRRIpiKZyJqjvMgt7CQakQACt6mao1j0='; // Ishlaydigan rasm URL

  return (
    <Card
      sx={{
        width: '18rem',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        className={`${
          isOpen ? 'cursor-pointer' : 'cursor-not-allowed'
        } relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={imageUrl}
          alt="Restaurant"
        />
        <Chip
          size="small"
          sx={{ position: 'absolute', top: '8px', left: '8px' }}
          color={isOpen ? 'success' : 'error'}
          label={isOpen ? 'Open' : 'Closed'}
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Uzbek Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into our global fla...
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
