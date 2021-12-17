import React, { useState, useEffect } from 'react'
import './CartProduct.css'
import { useDispatch } from "react-redux";
import { updateOneCart } from "../../store/cart"

function EditProduct({userId, product_id, quantity}) {

    const dispatch = useDispatch()
    const [ itemQuantity, setItemQuantity ] = useState(quantity)
    const [ errors, setErrors] = useState([]);

    const updateItem = () => {
      if (errors.length > 0) return
      dispatch(updateOneCart(userId, product_id, {
        "quantity": itemQuantity
        }));
    };
    

    useEffect(() => {
        const validationErrors = [];
        if (!/^[1-9][0-9]*$/.test(itemQuantity))
          validationErrors.push("Please enter a valid integer!");
        setErrors(validationErrors)
    },[itemQuantity])

    const changeQuantity = (e) => {
        setItemQuantity(e.target.value)
    }

    return (
      <>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
          <input
            className="cartProduct__remove__input"
            type="number"
            name="item_quantity"
            required
            min="1"
            onBlur={updateItem}
            onChange={changeQuantity}
            value={itemQuantity}
          ></input>
          <span className="cartProduct__remove__quantity"> items</span>
        </div>
      </>
    );
}

export default EditProduct
