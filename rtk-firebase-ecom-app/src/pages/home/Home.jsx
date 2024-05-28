import React from "react";
import "./home.css";
import Slider from "../../components/Slider";
import { Link } from "react-router-dom";
import Category from "../../components/Category";
import productData from "../../components/Products";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slice/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const addTocart = (item) => {
    dispatch(add(item ));
  };
  return (
    <div className="bg-light">
      <Slider></Slider>
      <Category></Category>

      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {productData.map((item) => {
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
                        <div className="btn-buy btn btn-outline-primary mb-3 w-100 " onClick={() => addTocart(item)}>
                          Buy
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
