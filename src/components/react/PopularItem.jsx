import React from 'react'
import { useState } from 'react'
import { menuItems } from '../../utils/data'
import MenuItem from './MenuItem'


const PopularItem = () => {
    const [popularItems, setPopularItems] = useState(menuItems);
    const filteredPopularItems = menuItems.filter((Popular) => Popular.isPopular === true);
  return (
    <div className="">
        <div className='flex flex-col gap-4 my-3 mx-auto w-full md:w-2/3'>
            <h2 className='text-3xl font-bold text-center'>Nos plats populaires</h2>
          {filteredPopularItems.length === 0 ? (
    <p>Aucun plat populaire pour le moment</p>
) : (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {filteredPopularItems.map((item) => (
 
         <MenuItem key={item.id} item={item} />
    ))}
</div>
)}
        </div>
    </div>
  )
}

export default PopularItem
