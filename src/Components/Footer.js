import React from "react";
import styled from "styled-components";

export default function Footer() {
  const FooterList = styled.div`
    background-color: #f5f5f5;
    padding: 2rem 1rem;
    width: 100%;
    min-height: 80px;
    color: #878787;
    text-align:center;
    font-size:1rem;
  `;
  return (
    <>
      <FooterList>
        개인 포트폴리오로, 영리목적으로 제작되지 않았습니다.
      </FooterList>
    </>
  );
}
