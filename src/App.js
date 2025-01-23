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
    console.log(priceMatch);
    console.log(filter.category)
    return categoryMatch && priceMatch && colorMatch && searchMatch;
  }).map(prv => (
    <Card title={prv.title} img={prv.img} alt={prv.title} star={prv.star} company={prv.company} newPrice={prv.newPrice} prevPrice={prv.prevPrice} reviews={prv.reviews} />
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
          {/* Sidebar content */}
        </div>
        <div className='sm:w-9/12 w-full h-full ml-auto'>
          <div className='w-full bg-slate-50 h-4/12 flex gap-2 items-center'>
            {/* Search bar and icons */}
          </div>
          <div className='h-full m-4'>
            <h1 className='font-black text-3xl'>Recommended</h1>
            <div className='flex flex-row gap-7 mt-3 ml-5 font-medium'>
              <div className='border-[2px] border-black px-6 rounded-lg w-fit' onClick={() => fun("All products")}>All products</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Nike")}>Nike</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Adidas")}>Adidas</div>
              <div className='border-[2px] border-black px-6 rounded-lg' onClick={() => fun("Puma")}>Puma</div>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-full justify-center items-center'>
              {elements}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;