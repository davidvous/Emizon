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
          validationErrors.push("Please enter a valid quantity of 1 or more");
        if (itemQuantity > 999)
          validationErrors.push("Please call wholesale for quantities over 999!");
        setErrors(validationErrors)
    },[itemQuantity])

    const changeQuantity = (e) => {
        setItemQuantity(e.target.value)
    }

    return (
      <>
        <div>
          {errors.map((error, ind) => (
            <div className="cartProduct__remove__error" key={ind}>{error}</div>
          ))}
          <div className="cartProduct__remove__container">
            <span className="cartProduct__remove__quantity">Quantity: </span>
            <input
                className="cartProduct__remove__input pointer"
                type="number"
                name="item_quantity"
                required
                min="1"
                onBlur={updateItem}
                onChange={changeQuantity}
                value={itemQuantity}
            ></input>
          </div>
        </div>
      </>
    );
}

export default EditProduct
