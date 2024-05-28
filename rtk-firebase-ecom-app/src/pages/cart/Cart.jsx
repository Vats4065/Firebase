import React, { useEffect, useState } from "react";
import "../home/home.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/slice/cartSlice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cartProduct);

  // console.log(cartItem);

  const handleRemove = (index) => {
    dispatch(remove(index));
    console.log(dispatch);
  };
  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <div className="row">
          {cartProduct.length === 0 ? (
            <h1>cart is empty</h1>
          ) : (
            cartProduct.map((item, index) => {
              console.log(index);
              console.log(item);
              if (item == []) {
                return <h1>Cart is Empty</h1>;
              } else {
                return (
                  <>
                    {" "}
                    <div
                      key={item.id}
                      className="col-xs-12 col-sm-6 col-md-3 col-lg-3 "
                    >
                      <div className="card-flyer">
                        <div className="text-box">
                          <div className="image-box">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="text-container">
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                            <h2 className="text-dark fw-bolder mt-4">
                              Rs.{item.price}
                            </h2>
                          </div>
                          <label htmlFor="">Qty : </label>
                          <div
                            className="btn-remove btn btn-outline-danger mb-3 w-100 "
                            onClick={() => handleRemove(index)}
                          >
                            Remove
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
