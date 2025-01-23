import React from 'react';
import data from './data';

export default function Radio(props) {
  const handleClick = (e) => {
    const value = e.target.value; // Value of the selected radio button
    const namee = e.target.name;  // Name of the radio button group (e.g., category, price, color)
    console.log("Name:", namee, "Value:", value);
    props.setSearch(value.toLowerCase());
  };

  return (
    <div className='w-9/12 h-full flex flex-col justify-around items-center'>
      <div className='flex flex-row gap-3 justify-between '>
        <div>Category</div>
        <div className='mt-6 flex flex-col gap-2'>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='category' value='sneakers' onClick={handleClick} />
            <span>Sneakers</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='category' value='flats' onClick={handleClick} />
            <span>Flats</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='category' value='heels' onClick={handleClick} />
            <span>Heels</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='category' value='boots' onClick={handleClick} />
            <span>Boots</span>
          </label>
        </div>
      </div>
      <div className='flex flex-row gap-3 justify-between '>
        <div>Price</div>
        <div className='mt-6 flex flex-col gap-2'>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='price' value='0-100' onClick={handleClick} />
            <span>0$-100$</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='price' value='100-200' onClick={handleClick} />
            <span>100$-200$</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='price' value='300-400' onClick={handleClick} />
            <span>300$-400$</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='price' value='400-500' onClick={handleClick} />
            <span>400$-500$</span>
          </label>
        </div>
      </div>
      <div className='flex flex-row gap-3 justify-between '>
        <div>Color</div>
        <div className='mt-6 flex flex-col gap-2'>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='color' value='White' onClick={handleClick} />
            <span>Yellow</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='color' value='black' onClick={handleClick} />
            <span>Blue</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='color' value='red' onClick={handleClick} />
            <span>Black</span>
          </label>
          <label className='flex flex-row gap-2'>
            <input type='radio' name='color' value='green' onClick={handleClick} />
            <span>Green</span>
          </label>
        </div>
      </div>
    </div>
  );
}