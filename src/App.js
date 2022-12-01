import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className='background'>
      <div className='main-container'>
        <div className='add-item-box'>
        <div className='item-list'>
            <div className='item-container'>
              <div className='item'>

              </div>

            </div>

        </div>

        </div>

      </div>

    </div>
  );
}

export default App;
