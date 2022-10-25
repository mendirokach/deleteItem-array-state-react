import React from "react";

function Item(props) {
  //const [clicked, setClicked] = React.useState(false);

  function handleOnClick() {
    //setClicked(true);
    props.onChecked(props.id);
  }

  return (
    <li
      onClick={handleOnClick}
      // style={{ textDecoration: clicked ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default Item;
