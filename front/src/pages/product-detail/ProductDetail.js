import React, { useState, useEffect } from "react";
import { ProductItem } from "../../components/product-item/ProductItem";
import { getItem } from "../../services/utils";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [itemState, setItemState] = useState({ state: "loading", item: {} });
  const { id } = useParams();

  useEffect(() => {
    const retriveData = async (id) => {
      try {
        const item = await getItem(id);
        setItemState({ state: "success", item: item });
      } catch (error) {
        setItemState({ state: "error", item: {} });
      }
    };
    retriveData(id);
  }, [id]);

  return (
    <div>
      <ProductItem productItem={itemState.item}></ProductItem>
    </div>
  );
};
