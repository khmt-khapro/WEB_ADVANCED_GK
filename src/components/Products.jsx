import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filters, sort);
  // input la 1 mang rong
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // call api, dependency la category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsApi = "http://localhost:5000/api/products";
        // nếu có category thì fetch có query params
        const res = await axios.get(
          cat ? productsApi + `?category=${cat}` : productsApi
        );
        // console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [cat]);

  // filter từng item trong mảng products, nếu color/size có tồn tại trong item đó thì trả về mảng products đã filter
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((product) =>
          Object.entries(filters).every(
            ([key, value]) => product[key].includes(value)
            // Object.entries sẽ tách key-value thành 1 mảng, vd như {size: "M", color: "red"} sẽ thành
            // [["size", "M"],[ "color", "red"]]
            // dùng rest operator để có cặp key-value
          )
        )
      );
  }, [products, cat, filters]);

  // sort products
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            // slice để lấy 8 item
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
