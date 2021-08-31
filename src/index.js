import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

/*

Step 1: Component Hierarchy

  App
    Header
    ShoppingList
        Filter
        Item
        Item
        Item


Step 2: Static Version of app
    Done


Step 3: Which state variables do we need?

    isDarkMode
    isInCart
    selectedCategory


Step 4: Where should state live?

    What components render something based on this state?
        isDarkMode: Header, App
        isInCart: 
        selectedCategory: 

    What is the common owner component?
        isDarkMode: App


*/
