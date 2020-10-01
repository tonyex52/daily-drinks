import React, { useCallback } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import * as constants from "./constants";
import { ReactComponent as DeleteIcon } from "../Icons/delete.svg";
import "./index.css";

const OrderItem = ({ className, info, onChange, onDelete }) => {
  const onChangeName = useCallback(
    (event) => {
      onChange(constants.NAME, event.target.value);
    },
    [onChange]
  );
  const onChangePrice = useCallback(
    (event) => {
      onChange(constants.PRICE, event.target.value);
    },
    [onChange]
  );
  const onChangeComment = useCallback(
    (event) => {
      onChange(constants.COMMENT, event.target.value);
    },
    [onChange]
  );

  return (
    <div className={`OrderItem ${className}`}>
      <div className="OrderItem-name">
        <Input
          className="OrderItem-input"
          type="text"
          value={info[constants.NAME]}
          onChange={onChangeName}
          placeholder="Name"
        />
      </div>
      <div className="OrderItem-price">
        <Input
          className="OrderItem-input"
          type="number"
          value={info[constants.PRICE]}
          onChange={onChangePrice}
          placeholder="Price"
        />
      </div>
      <div className="OrderItem-comment">
        <Textarea
          className="OrderItem-input OrderItem-comment-textarea"
          value={info[constants.COMMENT]}
          onChange={onChangeComment}
          placeholder="Comment"
        />
      </div>
      <div className="OrderItem-delete" onClick={onDelete}>
        <DeleteIcon className="OrderItem-delete-item" />
      </div>
    </div>
  );
};

export default OrderItem;
