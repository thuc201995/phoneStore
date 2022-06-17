import { Row, Col } from "antd";
import React, { useEffect, useMemo } from "react";
import { ProductCarrousel } from "../../components";
import { useGetProductDetailQuery } from "../api/apiSlice";
import { useSearchParams, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import cn from "classnames";

import "./styles.scss";
interface Props {}
const ProductView: React.FC<Props> = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductDetailQuery(id ?? skipToken);
  const imgs = useMemo(() => {
    try {
      const color = searchParams.get("mau-sac");
      if (isSuccess) {
        return color
          ? product.data.color[color]
          : product.data.color[Object.keys(product.data.color)[0]];
      } else {
        return [];
      }
    } catch {
      return [];
    }
  }, [searchParams.get("mau-sac"), isSuccess]);
  console.log(234, imgs);
  return (
    <div className={cn("container product_view")}>
      <ProductCarrousel images={imgs} />
      <Row className="m_20">
        <Col span={24} style={{ display: "flex", marginTop: 50 }}>
          Chọn màu:
          {product?.data?.color &&
            Object.keys(product?.data?.color)?.map(
              (c: string, index: number) => {
                return (
                  <div
                    style={{
                      background: c,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      cursor: "pointer",
                      marginLeft: 15,
                    }}
                    key={index}
                    onClick={() =>
                      setSearchParams({
                        "mau-sac": c,
                      })
                    }
                  ></div>
                );
              }
            )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductView;
