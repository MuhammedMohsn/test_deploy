import './App.css';
import { Fragment, useState,useEffect } from 'react';
import Data from './data'
import Menuitems from './Menuitems'
import Categories from './Categories'
function App() {
  let [items,setItems]=useState(Data)
  let allcategories=new Set(Data.map((item)=>{return item.category}))
  let [categories,setcategories]=useState(['all',...allcategories])
  let [selectedCategory,setselectedCategory]=useState()

  useEffect(()=>{
    if(selectedCategory){
      let filteredItems=items.filter((item)=>{return item.category==selectedCategory})
      console.log(filteredItems.length)
      console.log("no")
      setItems(filteredItems)
    }
    console.log(selectedCategory)
   
   },[selectedCategory,setselectedCategory])

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(items);
      return;
    }
    let newItems = items.filter((item) => item.category === category);
    return setItems(newItems);
    
  };
  return (
    <Fragment>
      <div className="container">  <h1>Our Menu</h1>
        <div className="underline"></div>
        <Categories filteritems={filterItems} setselectedCategory={setselectedCategory} selectedCategory={selectedCategory} categories={categories}/>
        <div className="c"> 
        <Menuitems items={items}/></div>
        </div>
    </Fragment>
  );

}

export default App;
