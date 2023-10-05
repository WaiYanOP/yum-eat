

import React, { useState } from 'react'
import { mealData } from '../data/data'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Meal = () => {
  const [foods,setFoods] = useState(mealData)
  const filterCat = (cat) => {
    setFoods (
        mealData.filter((item) => {
            return item.category === cat
        })
    )
  }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center m-3'>
                <button  onClick={ () => setFoods(mealData)}  className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>All</button>
                     <button onClick={ () => filterCart('pizza')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Pizza</button>
                     <button onClick={ () => filterCart('salad')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Salad</button>
                     <button onClick={ () => filterCart('noodle')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Noddle</button>
                     <button onClick={ () => filterCart('chicken')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Chicken</button>
                     <button onClick={ () => filterCart('rice')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Rice</button>
                     <button onClick={ () => filterCart('burger')} className='m-1 border-orange-700 text-slate-600 bg-white  hover:bg-slate-700 hover:text-white'>Burger</button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4'>
            {
                foods.map((item) => (
                    <div className='border-none hover:scale-105 duration-300' key={item.id}>
                        <img src={item.image} className='w-full h-[200px] object-cover rounded-lg' alt=""/>
                        <div className='flex justify-between py-2 px-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-500 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4'>
                            <p className='flex items-center text-indigo-500'>View More<ArrowRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meal