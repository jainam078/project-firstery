import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Product1 from "../assets/products/products slider/1.webp";
import Product2 from "../assets/products/products slider/2.webp";
import Product3 from "../assets/products/products slider/3.webp";
import "../Component/mainheader.css";

const Products = [
  {
    img: Product1,
    text: "Trendy Fits To Keep You Fit | 4 - 14Y",
    lable: "New Today",
  },
  {
    img: Product2,
    text: "Product 1 Name",
    lable: "New Today",
  },
  {
    img: Product3,
    text: "Product 2 Name",
    lable: "New Today",
  },
  {
    img: Product1,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product2,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product3,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product1,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product2,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product3,
    text: "Product 3 Name",
    lable: "New Today",
  },
  {
    img: Product1,
    text: "Product 3 Name",
    lable: "New Today",
  },
];
const MainPageProducts = () => {
  return (
    <div className="bg-light p-2">
      <h2 className="p-4">PREMIUM BOUTIQUES</h2>
      <div className="container d-flex flex-wrap">
        {Products.map((item) => {
          return (
            <Card role="button" className="m-2 cardstyle">
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="flex-column">
                {/* <Card.Title>Card Title</Card.Title> */}
                <div className="d-flex justify-content-start">
                  <Card.Text>{item.text}</Card.Text>
                </div>
                <div className="d-flex justify-content-start">
                  <Card.Text>{item.lable}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MainPageProducts;
