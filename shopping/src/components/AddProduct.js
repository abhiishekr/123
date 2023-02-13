import React, { useEffect, useState } from "react";
import { PostCall } from "../Backend/APICalls";
import { set, useForm } from "react-hook-form";

function AddProduct() {
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    setData(data);
    getData(data);
  };

  async function getData(data) {
    const temp = await PostCall(data);
    return setData(temp);
  }

  return (
    <div>
      <div className="add-product">
        Item data
        <form onSubmit={handleSubmit(handleRegistration)}>
          <input
            type="text"
            label="product-name"
            placeholder="title"
            {...register("title")}
          />
          <input
            type="text"
            label="price"
            placeholder="price"
            {...register("price")}
          />
          <input
            type="text"
            label="Description"
            placeholder="description"
            {...register("description")}
          />
          <input
            type="text"
            label="image"
            placeholder="image"
            {...register("image")}
          />
          <input
            type="text"
            label="category"
            placeholder="category"
            {...register("category")}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
