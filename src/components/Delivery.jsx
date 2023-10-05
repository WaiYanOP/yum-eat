

import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
            <img className='w-[750px] mx-auto my-' 
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convinence on-demand</h1>
                <p className='text-justify pe-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa delectus, harum esse unde deserunt iusto non repudiandae quidem libero laudantium repellat? Repellat aut quas perferendis esse, doloremque laborum illo.
                Maxime dolor similique reiciendis possimus recusandae maiores assumenda facere ipsa, dolorum eos id et dolores explicabo magnam ab quos aliquam voluptatem, repellendus voluptatum cupiditate? Culpa eveniet maxime voluptatibus? Cumque, laudantium?
                Quae tenetur numquam facere modi quia libero inventore soluta quidem qui, illum est earum nobis excepturi dolorem et ex id itaque fuga hic explicabo repellendus magnam. Voluptas voluptatem maxime quia!</p>
                <button className='bg-black text-[#5d3ed7] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery