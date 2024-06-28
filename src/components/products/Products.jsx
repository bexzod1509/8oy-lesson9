import React, { useState } from "react";
import rate from "../../assets/Frame 5.svg";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Pagination } from "@mui/material";
function Products() {
  const [page, setPage] = useState(sessionStorage.getItem("page") || 1);
  const { data, isLoading, isFetching } = useGetProductsQuery({
    page: page,
    limit: 6,
  });
  let result = Math.ceil(data?.data?.count / 6);
  let products = data?.data.products.map((el) => (
    <div key={el.id} className="c2">
      <img width={250} height={250} src={el.urls[0]} alt="" />
      <div className="c3">
        <h1>{el.title}</h1>
        <img src={rate} alt="" />
        <div>
          <del>${Math.round(+el.price + 10)}.00 </del>
          <span>${el.price}.00 </span>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section>
        <div className="container">
          <div className="c1">
            <p>Find your favourite smart watch.</p>
            <h1>Our Latest Products</h1>
          </div>
          <div className="c">{products}</div>
          <div className="c5">
            <Pagination
              onChange={(_, e) => {
                setPage(e);
                sessionStorage.setItem("page", e);
              }}
              count={result ? result : 10}
              page={+page}
              color="primary"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
