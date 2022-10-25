import React from "react";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = React.useState();
  const [items, setItems] = React.useState([]);

  function handleOnChange(e) {
    const { value } = e.target;
    setInputText(value);
  }

  function handleOnClick(event) {
    setItems((prevs) => {
      return [...prevs, inputText];
    });

    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevs) => {
      return prevs.filter((prev, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" value={inputText} />
        <button>
          <span onClick={handleOnClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((x, index) => (
            <Item item={x} onChecked={deleteItem} key={index} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
