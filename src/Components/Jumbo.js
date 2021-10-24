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
const Button = styled.button`
  background-color: #000000;
  border: none;
  padding: 7px 15px;
  color: white;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    background-color: #ededed;
    color: #000000;
    font-weight: bold;
  }
`;
export default function Jumbo() {
  return (
    <Jumbotron>
    </Jumbotron>
  );
}
