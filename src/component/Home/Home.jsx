import React from 'react';
import "./Home.css";
import MultiItemCorousel from './MultiItemCorousel';
import RestaurantCart from '../Restaurant/RestaurantCart';

const restaurants = [1, 1, 1, 1, 1, 1, 1, 1];

export const Home = () => {
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
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10 font-bold my-8">
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
            <RestaurantCart key={item.id} name={item.name} image={item.image} description={item.description} />
          ))}
        </div>
      </section>
      
    </div>
  );
};
export default Home;