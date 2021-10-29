import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import "styles/detailInfo.scss";

export default function DetailInfo() {
  const { id } = useParams();
  const DetailWrap = styled.div`
    width: 50%;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      width: 80%;
    }
  `;
  return (
    <DetailWrap>
      <section>
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
      </section>
      {/* 상세내용 */}
      <section>
        <p class="text-center mb-4">
          MY <b>FIT</b> SIZE
        </p>
        <hr />
        <img
          src={`${process.env.PUBLIC_URL}/images/detail/detail-line${id}4.png`}
        />
        <table class="table table-hover text-center mt-5">
          <thead>
            <tr>
              <th scope="col">Size</th>
              <th scope="col">가슴둘레</th>
              <th scope="col">팔둘레</th>
              <th scope="col">소매길이</th>
              <th scope="col">총장</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>S</th>
              <td>112</td>
              <td>41</td>
              <td>59</td>
              <td>108</td>
            </tr>
            <tr>
              <th>M</th>
              <td>116</td>
              <td>42.5</td>
              <td>60</td>
              <td>109</td>
            </tr>
            <tr>
              <th>L</th>
              <td>122</td>
              <td>44.5</td>
              <td>61.5</td>
              <td>110</td>
            </tr>
          </tbody>
        </table>
        <p className="color-999">단위: cm</p>

        <div className="">
          <p>
            <b>색상</b>
            <span></span>
          </p>
          <p>
            <b>사이즈</b>
            <span></span>
          </p>
          <p>
            <b>소재</b>
            <span></span>
          </p>
          <p>
            <b>제조국</b>
            <span></span>
          </p>
          <p>
            <b>제조사</b>
            <span></span>
          </p>
          <p>
            <b>제조일자</b>
            <span></span>
          </p>
          <p>
            <b>AS책임자</b>
            <span></span>
          </p>
          <p>
            <b>품질보증기준</b>
            <span>
              상품수령후 7일 이내에 신청하실수 있습니다.
              <br />
              단, 다음의 경우 해당하는 반품/교환은 신청이 불가능할 수 있습니다.
            </span>
            <ul>
              <li>소비자의 책임있는 사유로 상품등이 멸실 또는 훼손된경우</li>
              <li>
                소비자의 사용 또는 소비에 의해 상품등의 가치가 현저히 감소한
                경우
              </li>
              <li>복제가 가능한 상품등의 포장을 훼손한경우</li>
              <li>
                소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간
                경우
              </li>
            </ul>
          </p>
          <p>
            <b>수입여부</b>
            <span>-</span>
          </p>
          <p>
            <b>취급 시 주의사항</b>
            <span>
              자세한 주의사항은 상세페이지 참고해주세요.
              <br />
              지퍼/단추/스냅 등은 잠그신 후 뒤집어서 세탁해 주시기 바랍니다.
              <br />
              땀과 비 등에 의해 젖은 상태로 오래 방치 할 경우 변색의 우려가
              있습니다.
              <br />
              소비자 부주의로 인한 제품 손상은 보상 되지 않습니다.
            </span>
          </p>
        </div>
      </section>
    </DetailWrap>
  );
}
