
import { Grid } from '@mui/material'
import React from 'react'

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/uzbekh/uzbekian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <img className='w-full h-[40vh] object-cover' src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?b=1&s=612x612&w=0&k=20&c=6Hp8_alO9BBpQYYpblorjchmZwu6ZmKSRREyj9cv1Zc=" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover' src="https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </Grid>
                </Grid>
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails