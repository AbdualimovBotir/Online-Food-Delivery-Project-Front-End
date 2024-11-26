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
  FormControlLabel,
} from "@mui/material";

const MenuCard = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ backgroundColor: "#121212", color: "white" }}>
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: "cover" }}
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: "white" }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                ₹{item.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {item.description}
              </Typography>
              <Button
                sx={{ marginTop: "1rem", backgroundColor: "#ff4081", color: "white" }}
                fullWidth
                onClick={() => handleExpandClick(index)}
              >
                {expandedItem === index ? "Hide Options" : "Customize"}
              </Button>
              <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                <FormGroup sx={{ marginTop: "1rem" }}>
                  <Typography variant="body2" sx={{ marginBottom: "0.5rem", color: "white" }}>
                    Nuts & Seeds
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Cashews" sx={{ color: "white" }} />
                  <Typography variant="body2" sx={{ marginTop: "1rem", marginBottom: "0.5rem", color: "white" }}>
                    Protein
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Ground beef" sx={{ color: "white" }} />
                  <FormControlLabel control={<Checkbox />} label="Bacon strips" sx={{ color: "white" }} />
                  <Typography variant="body2" sx={{ marginTop: "1rem", marginBottom: "0.5rem", color: "white" }}>
                    Bread
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Hamburger buns" sx={{ color: "white" }} />
                  <Typography variant="body2" sx={{ marginTop: "1rem", marginBottom: "0.5rem", color: "white" }}>
                    Vegetables
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Lettuce" sx={{ color: "white" }} />
                  <FormControlLabel control={<Checkbox />} label="Tomato slices" sx={{ color: "white" }} />
                  <FormControlLabel control={<Checkbox />} label="Pickles" sx={{ color: "white" }} />
                  <FormControlLabel control={<Checkbox />} label="Onion slices" sx={{ color: "white" }} />
                  <Typography variant="body2" sx={{ marginTop: "1rem", marginBottom: "0.5rem", color: "white" }}>
                    Condiments
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Ketchup" sx={{ color: "white" }} />
                </FormGroup>
                <Button
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#ff4081",
                    color: "white",
                  }}
                  fullWidth
                >
                  Add to Cart
                </Button>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuCard;
  