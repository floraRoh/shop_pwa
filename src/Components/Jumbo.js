import React from "react";
import styled from "styled-components";

const Jumbotron = styled.div`
  width: 100%;
  min-height:400px;
  padding: 3rem 2rem;
  background-color: #ededed;
  background-image: url("https://img.insight.co.kr/static/2020/02/27/700/18vq61206n9kiunkd2vd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "IM_Hyemin-Regular";
`;
export default function Jumbo() {
  return (
    <Jumbotron>
    </Jumbotron>
  );
}
