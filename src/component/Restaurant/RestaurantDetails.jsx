import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Collapse,
  Checkbox,
  FormGroup,
  Divider,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel, // Bu faqat bitta marta bo'lishi kerak
} from "@mui/material";
import MenuCard from "./MenuCard";

// Kategoriyalar va taom turlari
const categories = ["All Categories", "Pizza", "Biryani", "Burger", "Chicken", "Rice"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menuItems = [
  {
    name: "Margherita Pizza",
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
    category: "Pizza",
    price: "$8.99",
    type: "vegetarian",
    description: "Classic Margherita pizza with fresh mozzarella, basil, and tomato sauce.",
  },
  {
    name: "Chicken Biryani",
    image:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    category: "Biryani",
    price: "$10.99",
    type: "non_vegetarian",
    description: "Spicy and flavorful chicken biryani with fragrant basmati rice.",
  },
  // boshqa menyu elementlarini qo'shishingiz mumkin...
  {
    name: "Chicken Biryani",
    image:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    category: "Biryani",
    price: "$10.99",
    type: "non_vegetarian",
    description: "Spicy and flavorful chicken biryani with fragrant basmati rice.",
  },
  {
    name: "Chicken Biryani",
    image:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    category: "Biryani",
    price: "$10.99",
    type: "non_vegetarian",
    description: "Spicy and flavorful chicken biryani with fragrant basmati rice.",
  },
  {
    name: "Chicken Biryani",
    image:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    category: "Biryani",
    price: "$10.99",
    type: "non_vegetarian",
    description: "Spicy and flavorful chicken biryani with fragrant basmati rice.",
  },
  {
    name: "Margherita Pizza",
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
    category: "Pizza",
    price: "$8.99",
    type: "vegetarian",
    description: "Classic Margherita pizza with fresh mozzarella, basil, and tomato sauce.",
  },
  {
    name: "Margherita Pizza",
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
    category: "Pizza",
    price: "$8.99",
    type: "vegetarian",
    description: "Classic Margherita pizza with fresh mozzarella, basil, and tomato sauce.",
  },
];

const RestaurantDetails = () => {
  const [selectedFoodType, setSelectedFoodType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleFilter = (event) => {
    const { name, value } = event.target;
    if (name === "food_type") {
      setSelectedFoodType(value);
    } else if (name === "food_category") {
      setSelectedCategory(value);
    }
  };

  // Filtrlangan menyu elementlari
  const filteredMenuItems = menuItems.filter((item) => {
    const matchesFoodType =
      selectedFoodType === "all" || item.type === selectedFoodType;
    const matchesCategory =
      selectedCategory === "All Categories" || item.category === selectedCategory;
    return matchesFoodType && matchesCategory;
  });

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home / Uzbekh / Uzbekian fast food / 3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?b=1&s=612x612&w=0&k=20&c=6Hp8_alO9BBpQYYpblorjchmZwu6ZmKSRREyj9cv1Zc="
                alt="Restaurant Banner"
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Uzbekh Fast Food</h1>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
          <div className="box space-y-5 lg:sticky top-28">
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Type
            </Typography>
            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup
                name="food_type"
                value={selectedFoodType}
                onChange={handleFilter}
              >
                {foodTypes.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Divider />
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Category
            </Typography>
            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup
                name="food_category"
                value={selectedCategory}
                onChange={handleFilter}
              >
                {categories.map((category) => (
                  <FormControlLabel
                    key={category}
                    value={category}
                    control={<Radio />}
                    label={category}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Menu
          </Typography>
          <MenuCard items={filteredMenuItems} />
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;