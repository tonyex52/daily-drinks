import React, { useState, useCallback } from "react";
import OrderItem from "./components/OrderItem";
import * as OrderItemConstants from "./components/OrderItem/constants";
import { ReactComponent as AddIcon } from "./components/Icons/add.svg";
import "./App.css";

function App() {
  const [orderList, setOrderList] = useState([]);
  const onEditOrder = useCallback(
    (index) => (columnType, value) => {
      const newOrderList = orderList.slice();
      newOrderList[index][columnType] = value;
      setOrderList(newOrderList);
    },
    [orderList, setOrderList]
  );
  const onDelete = useCallback(
    (index) => () => {
      const newOrderList = orderList.slice();
      newOrderList.splice(index, 1);
      setOrderList(newOrderList);
    },
    [orderList, setOrderList]
  );
  const onAddItem = useCallback(() => {
    const newOrderList = orderList.slice();
    newOrderList.push({
      [OrderItemConstants.NAME]: "",
      [OrderItemConstants.PRICE]: "",
      [OrderItemConstants.COMMENT]: "",
    });
    setOrderList(newOrderList);
  }, [orderList, setOrderList]);

  return (
    <div className="App">
      <div className="App-title">Daily Drinks</div>
      <div className="App-content" data-testid="app_content">
        {orderList.map((item, index) => (
          <OrderItem
            className="App-orderItem"
            data-testid="app_orderItem"
            key={index}
            info={item}
            onChange={onEditOrder(index)}
            onDelete={onDelete(index)}
          />
        ))}
        <div className="App-add-orderItem">
          <AddIcon
            className="App-addIcon"
            data-testid="app_add_orderItem"
            onClick={onAddItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
