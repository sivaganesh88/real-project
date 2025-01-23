import { AiOutlineContacts, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import './App.css';
import data from './data';
import Card from "./Card"
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ category: '', price: '', color: '' });

  const elements = data.filter((ele) => {
    const categoryMatch = filter.category ? ele.category.toLowerCase() === filter.category.toLowerCase() : true;
    const priceMatch = filter.price ? ele.newPrice >= filter.price.split('-')[0] && ele.newPrice <= filter.price.split('-')[1] : true;
    const colorMatch = filter.color ? ele.color.toLowerCase() === filter.color.toLowerCase() : true;
    const searchMatch = ele.company.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && priceMatch && colorMatch && searchMatch;
  }).map(prv => (
    <Card title={prv.title} img={prv.img} star={prv.star} company={prv.company} newPrice={prv.newPrice} prevPrice={prv.prevPrice} reviews={prv.reviews} />
  ));

  const handleClick = (e) => {
    const value = e.target.value;
    const namee = e.target.name;
    setFilter({ ...filter, [namee]: value });
  };

  function fun(word) {
    if (word === 'All products') {
      setSearch('');
    } else {
      setSearch(word.toLowerCase());
    }
  }

  return (
    <>
      <div className='w-full h-full overflow-x-hidden flex justify-between flex-row bg-transparent rounded-xl'>
        <div className='h-full w-full sm:w-3/12 sm:fixed bg-slate-50 sm:block hidden left-0 top-0'>
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
                  <input type='radio' name='color' value='yellow' onClick={handleClick} />
                  <span>Yellow</span>
                </label>
                <label className='flex flex-row gap-2'>
                  <input type='radio' name='color' value='blue' onClick={handleClick} />
                  <span>Blue</span>
                </label>
                <label className='flex flex-row gap-2'>
                  <input type='radio' name='color' value='black' onClick={handleClick} />
                  <span>Black</span>
                </label>
                <label className='flex flex-row gap-2'>
                  <input type='radio' name='color' value='green' onClick={handleClick} />
                  <span>Green</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:w-9/12 w-full h-full ml-auto'>
          <div className='w-full bg-slate-50 h-4/12 flex gap-2 items-center'>
            <div className='h-full w-7/12 flex mt-3 items-center'>
              <div className='w-9/12 sm:w-5/12 h-10 mb-3 ml-7 flex items-center bg-slate-300 rounded-lg '>
                <AiOutlineSearch size={20} className='ml-2'></AiOutlineSearch>
                <input className='w-full h-full bg-slate-300 rounded-lg' onChange={(e) => setSearch(e.target.value)}></input>
              </div>
            </div>
            <div className='h-full w-4/12 flex items-end justify-end mr-4 sm:mr-10 gap-5'>
              <AiOutlineShoppingCart size={30} className='mb-3'></AiOutlineShoppingCart>
              <AiOutlineContacts size={30} className='mb-3'></AiOutlineContacts>
              <AiOutlineHeart size={30} className='mb-3'></AiOutlineHeart>
            </div>
          </div>
          <div className='h-full m-4'>
            <h1 className='font-black text-3xl'>Recommended</h1>
            <div className='flex flex-row gap-7 mt-3 ml-5 font-medium'>
              <div className='border-[2px] border-black px-6 rounded-lg w-fit' onClick={() => fun("All products")}>All products</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Nike")}>Nike</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Adidas")}>Adidas</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Puma")}>Puma</div>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-full justify-center items-center'>{elements}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;