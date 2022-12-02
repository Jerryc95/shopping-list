import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { itemName: "Apples", quantity: 4, isCompleted: false },
    { itemName: "Soda", quantity: 1, isCompleted: true },
    { itemName: "Chicken", quantity: 2, isCompleted: false },
    { itemName: "Potatos", quantity: 3, isCompleted: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(10)

  const handleAddButtonClick = () => {
      const newItem = {
        itemName: inputValue,
        quantity: 1,
        isCompleted: false
      };
      
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue("")
      setTotalItemCount(totalItemCount + 1);
      
  };

  const handleQuantityIncrease = (index) => {
      const newItems = [...items];
      newItems[index].quantity++
      setItems(newItems);
      calculateTotal()
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    if(newItems[index].quantity > 0) {
      newItems[index].quantity--
      setItems(newItems);
      calculateTotal()
    }
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted
    setItems(newItems);
  }

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity
    }, 0);
    setTotalItemCount(totalItemCount);
  }

  return (
    <div className="background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            className="add-item-input"
            placeholder="Add an item"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <FontAwesomeIcon icon={faPlus} onClick ={() => handleAddButtonClick() } />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item" onClick={() => toggleComplete(index)}>
                {item.isCompleted ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index) }/>
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} onClick ={() => handleQuantityIncrease(index)} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
}

export default App;
