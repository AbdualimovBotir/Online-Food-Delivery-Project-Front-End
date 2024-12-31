import React, { useEffect } from 'react';
import "./Home.css";
import MultiItemCorousel from './MultiItemCorousel';
import RestaurantCart from '../Restaurant/RestaurantCart';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../State/Restaurant/Action';

const restaurants = [
  {
    id: 1,
    name: "Pizza Place",
    images: ["https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg"],
    description: "Delicious pizzas made with fresh ingredients."
  },
  {
    id: 2,
    name: "Burger World",
    images: ["https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg"],
    description: "Juicy burgers with a variety of toppings."
  },
  {
    id: 3,
    name: "Sushi Spot",
    images: ["https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg", "https://static.tildacdn.com/tild3536-3830-4831-b865-633162643063/1672272124_kalix-clu.jpg"],
    description: "Authentic sushi with fresh fish."
  },
];

export const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  // const { restaurant } = useSelector(store => store);
  // const { restaurants, loading, error } = useSelector((state) => state.restaurant);
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  console.log("restaurant", restaurants);

  useEffect(() => {
    dispatch(getAllRestaurants(jwt));
  }, [dispatch, jwt]);

  return (
    <div>
      {/* Banner Section */}
      <section className="banner relative flex flex-col justify-center items-center -z-50 p-10 lg:py-10 lg:px-20">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl md:text-4xl lg:text-6xl font-bold z-10 py-5">Fast Food</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Test the Convenience: Food, Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      {/* Top Meals Section */}
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl text-gray-400 py-3 pb-10 font-bold my-8">
          Top Meals
        </p>
        <MultiItemCorousel />
      </section>

      {/* Restaurant Cards Section */}
      <section className="p-10 lg:py-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          Order from our handpicked favourites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {restaurants.map((item) => (
            <RestaurantCart
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;