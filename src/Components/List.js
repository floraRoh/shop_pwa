import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SlideWrap from "Components/SlideWrap";

export default function List(props) {
  const Card = styled.div`
    margin-bottom: 50px;
    h5 {
      margin:10px 10px 5px 10px;
      font-size:1rem;
    }
    p {
      font-size: 0.85rem;
      margin: 0 10px;
    }
  `;
  return (
    <>
      <SlideWrap />
      <div className="container mt-5">
        <div className="row">
          {props.dataList.map((data, i) => {
            return (
              <Link
                key={i}
                className="col-lg-3 col-md-4 col-sm-6 card-list"
                to={{
                  pathname: `/detail/${data.id}`,
                  // 위의 data.id => 파라미터로 넘어가는값이다.
                }}
              >
                <Card>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/list/card${i}.jpg`}
                      alt={data.title}
                    />
                  </div>
                  <h5>{data.title}</h5>
                  <p>{`${data.content}`}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
