import { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import TodoItem from './components/TodoItem';

function App() {
    const [items,setItems] = useState([]);
    const addItems = (inputText) => {
      setItems((prevItems) => {
        return [...prevItems,inputText];
      });
    };
    const deleteItem = (id) => {
      setItems((prevItems) => {
        return prevItems.filter((item,index) => {
          return index!==id;
        });
      })
    };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        <InputArea addItems={addItems}/>
      </div>
      <ul>
        {
          items.map((item,index)=>{
            return (
              <TodoItem key={index} text={item} deleteItem={deleteItem} id={index}/>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
