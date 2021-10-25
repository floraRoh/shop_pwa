import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function List(props) {
  const ImgBox = styled.div`
    height: 500px;
  `;
  const Card = styled.div`
    margin-bottom: 50px;
    text-align: center;
    h4 {
      font-weight: bold;
      font-family: 1.5rem;
      text-align: center;
      line-height: 50px;
    }
    p {
      font-size: 1rem;
    }
  `;
  return (
    <>
      {props.dataList.map((data, i) => {
        return (
          <Link
            key={i}
            className="col-lg-4 col-md-6"
            to={{
              pathname: `/detail/${data.id}`,
              // 위의 data.id => 파라미터로 넘어가는값이다.
            }}
          >
            <Card>
              <ImgBox>
                <img src={`/images/card${i}.jpg`} alt={data.title} />
              </ImgBox>
              <h4>{data.title}</h4>
              <p>{`${data.price}원`}</p>
            </Card>
          </Link>
        );
       
      })}
    </>
  );
}
