import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { AddReaction } from '@mui/icons-material';
import { Divider, Drawer, useMediaQuery, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Menu ikona import qilish
import CloseIcon from '@mui/icons-material/Close'; // Close ikona import qilish
import { useNavigate } from 'react-router-dom';

const menu = [
  { title: 'Orders', icon: <ShoppingBagIcon /> },
  { title: 'Favorites', icon: <FavoriteIcon /> },
  { title: 'Address', icon: <AddReaction /> },
  { title: 'Payments', icon: <AccountBalanceWalletIcon /> },
  { title: 'Notification', icon: <NotificationsActiveIcon /> },
  { title: 'Events', icon: <EventIcon /> },
  { title: 'Logout', icon: <LogoutIcon /> },
];

const ProfileNavigation = ({ open, setOpenSideBar }) => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const navigate = useNavigate();

  // Navigatsiya funksiyasi
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
    setOpenSideBar(false); // Menyu yopiladi
  };

  const handleToggle = () => {
    setOpenSideBar((prev) => !prev); // Menyuni ochish yoki yopish
  };

  return (
    <div className="relative">
      {/* Menyu tugmasi */}
      <Button variant="contained" onClick={handleToggle}>
        {open ? <CloseIcon /> : <MenuIcon />} {/* Icona ochilgan yoki yopilganiga qarab o'zgaradi */}
      </Button>

      {/* Drawer (yon menyu) */}
      <Drawer
        variant={isSmallScreen ? 'permanent' : 'temporary'}
        open={open}
        onClose={handleToggle} // Yopish uchun
        anchor="left"
        sx={{
          zIndex: 1100, // yuqori z-index qiymati
          position: 'fixed', // Menyu ekran bo'ylab turadi
          top: 0, // Menyuning yuqori qismiga yopishib qolish uchun
          left: 0, // O'ng tomon bo'lishi uchun
          height: '100vh', // Ekran bo'ylab bo'lishi uchun
        }}
      >
        <div className="w-full lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-20">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              {/* `onClick`ni har bir element uchun joylashtiraman */}
              <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
