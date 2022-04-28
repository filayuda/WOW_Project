import React from "react";
import { Link } from "react-router-dom";

import convertRupiah from "rupiah-format";


export default function BookCard({ item }) {
  return (
    <Link to={`/book/:id/` + item.id} style={{ textDecoration: "none" }}>
      <div className="card-product mt-3">
        <img src="#" className="img-fluid img-rounded" />
        <div className="p-2">
          <div className="text-header-product-item">{item.title}</div>
          <div className="text-product-item mb-4">{item.about}</div>
          {/* <div className="text-product-item mb-3">{convertRupiah.convert(item.price)}</div> */}
          {/* <div className="text-product-item">Stock : {item.qty}</div> */}
        </div>
      </div>
    </Link>
  );
}
