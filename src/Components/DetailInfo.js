import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export default function DetailInfo() {
  const { id } = useParams();
  const DetailWrap = styled.div`
    width: 50%;
    margin: 0 auto;
    @media screen and (max-width:1024px){
      width:80%;
    }
  `;
  return (
    <DetailWrap>
      <img
        src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}0.jpg`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}1.jpg`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}2.jpg`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}3.jpg`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}4.jpg`}
      />
    </DetailWrap>
  );
}
