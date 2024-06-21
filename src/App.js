import { useState } from "react";
import Item from "./App/item";
import './App.css';

function App() {
  const foods = [
    {
      name: 'Salad',
      price: 1
    },
    {
      name: 'Bacon',
      price: 1.5
    },
    {
      name: 'Cheese',
      price: 2
    },
    {
      name: 'Meat',
      price: 2.5
    }
  ];

  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  

  const handleCalc = (method, price_) => {
      const result =  price + (method * price_)
      if((price + (method * price_))>=0){
        setPrice(result)
        setCount(count+1)
      }
  };

  return (
    <div className="container">
      <p className="price">
        <span>Price:</span>
        <span>{price}</span>
      </p>
      <div className="food">
        {
          foods.map(food=> (
            <Item 
              
              name={food.name} 
              pric={food.price}
              onDecrease={() => handleCalc(-1, food.price)}
              onIncrease={() => handleCalc(1, food.price)}
            />
          ))
        }
      </div>
      <div>
        count:
        <span>{count}</span>
      </div>
    </div>
  );
}

export default App;
