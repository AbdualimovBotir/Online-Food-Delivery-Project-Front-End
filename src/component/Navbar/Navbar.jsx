import { Avatar, IconButton, Badge } from '@mui/material'; // Badge import qilindi
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
export const Navbar = () => {
    return (
        <div className="px-5 z-50 py-3 bg-[#e91e63] lg:px-20 flex justify-between items-center">
            {/* Logo */}
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <h1 className="font-semibold text-gray-100 text-2xl">
                    Fast Food
                </h1>
            </div>

            {/* Search, Avatar va Cart Badge */}
            <div className="flex items-center space-x-6">
                {/* Search */}
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </IconButton>
                </div>

                {/* User Avatar */}
                <div>
                    <Avatar sx={{ bgcolor: "white", color: "#e91e63" }}>
                        B
                    </Avatar>
                </div>

                {/* Shopping Cart Badge */}
                <div>
                    <IconButton>
                        <Badge badgeContent={3} color="error">
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
