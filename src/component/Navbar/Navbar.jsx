import { Avatar, IconButton, Badge, Box } from '@mui/material'; // Badge va Box import qilindi
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import zIndex from '@mui/material/styles/zIndex';

const Navbar = () => {
    const navigate=useNavigate();
    return (
        <Box  className="px-5  sticky top-0 z-50 py-3 bg-[#e91e63] lg:px-20 flex justify-between items-center">
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
                   { false ?<Avatar sx={{ bgcolor: "white", color: "#e91e63" }}>
                        B
                    </Avatar>:
                    <IconButton onClick={()=>navigate("/account/login")}>
                        <Person/>
                    </IconButton>    
                }
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
        </Box>
    );
};

export default Navbar;