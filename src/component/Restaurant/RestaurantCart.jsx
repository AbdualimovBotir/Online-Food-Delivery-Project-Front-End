import React from 'react';
import { Card, IconButton, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCart = ({ item }) => {
  const isOpen = true; // Restaurant ochiq yoki yopiqligini ko'rsatadi
  const isFavorite = true; // Foydalanuvchi ushbu restoranni favorit qilganligini ko'rsatadi

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '26rem',
        borderRadius: '14px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
      className="restaurant-card"
    >
      <div
        className={`${
          isOpen ? 'cursor-pointer' : 'cursor-not-allowed'
        } relative`}
      >
        <img
          className="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] object-cover"
          src={item.images?.[1] || item.image} // images[2] mavjud bo'lmasa, image ishlatiladi
          alt={item.name}
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
          <p className="font-semibold text-lg text-gray-900">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.description}</p>
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
