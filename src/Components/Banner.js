import React from "react";
import styled from "styled-components";

function Banner() {
  const BannerWrap = styled.div`
    position: fixed;
    top: 50%;
    right: 30px;
    width: 130px;
    height: 300px;
    background: white;
    border: 1px solid #ededed;
    transform: translateY(-20%);
  `;
  const BannerTitle = styled.p`
    text-align: center;
    line-height: 40px;
    margin-top: 0;
    border-bottom: 1px solid #ededed;
  `;
  return (
    <>
      <BannerWrap>
        <BannerTitle>최근 본 상품</BannerTitle>
        {}
      </BannerWrap>
    </>
  );
}

export default Banner;
