import React, { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem.js';
import Search from './components/Search.js';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const [cachedProducts, setCachedProducts] = useState([]);

  const productsUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(productsUrl);
        const productsData = await response.json();
        setProducts(productsData);
        setCachedProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    value === '' ? emptySearchBoxHandler() : setSearchValue(value);
  };

  const emptySearchBoxHandler = () => {
    setProducts(cachedProducts);
    setSearchValue('');
  };

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'));
    });
  };

  const searchSubmitHandler = () => {
    const filteredProdList = arraySearch(products, searchValue);
    if (filteredProdList.length === 0) {
      alert('No items were found.');
      setSearchValue('');
    } else {
      setProducts(filteredProdList);
    }
  };

  const prodItems = products.map((item) => <ProductItem key={item.id} prodItem={item} />);

  const loaderAnim = <span className="loading">Loading...</span>;

  return (
    <div className="main">
      <Search value={searchValue} onChange={inputChangeHandler} onClick={searchSubmitHandler} />
      <div className="items">{products.length > 0 ? prodItems : loaderAnim}</div>
    </div>
  );
}

export default App;
