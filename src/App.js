import axios from "axios";
import "./App.css";
import Category from "./Category";
import ProductItems from "./ProductItems";
import { useEffect, useState } from "react";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProducts, setFinalProducts] = useState([]);
  let [catName, setCatName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      });
  };

  let products = finalProducts.map((product, index) => {
    return <ProductItems product={product} key={index} />;
  });

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProducts(finalRes.products);
        });
    }
  }, [catName]);

  return (
    <div className="max-w-[1320px] mx-auto p-4">
      <h1 className="text-center text-[3rem] font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Category finalCategory={finalCategory} setCatName={setCatName} />
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {finalProducts.length >= 1 ? products : "No Products Found"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
