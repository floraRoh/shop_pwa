/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "styles/detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
// 컴포넌트 등장/업데이트 시 transition을 쉽게쉽게 줄 수 있음
import Banner from "Components/Banner";
import DetailInfo from "Components/DetailInfo";

const tabUi = {
  info: <DetailInfo />,
  shipping: <div>배송관련</div>,
  refund: <div>환불약관</div>,
};
function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const findId = props.dataList.find((x) => x.id == id);
  const [isNotice, SetIsNotice] = useState(true);
  const [input, SetInput] = useState("");
  const [tabs, SetTabs] = useState("info");
  const [tabsOn, SetTabsOn] = useState(false);
  const [contentCount, SetContentCount] = useState(0);

  const onChange = (e) => {
    SetInput(e.target.value);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      SetIsNotice(false);
    }, 2000);
    return () => {
      clearTimeout(timer); // 버그방지
    };
  }, [isNotice]);

  useEffect(() => {
    let itemArr = localStorage.getItem("currentItem");

    if (itemArr == null) {
      itemArr = [];
    } else {
      itemArr = JSON.parse(itemArr);
    }
    itemArr.push(id);
    itemArr = new Set(itemArr);
    itemArr = [...itemArr];

    localStorage.setItem("currentItem", JSON.stringify(itemArr));
  }, []);

  const onDecrease = () => {
    SetContentCount(contentCount - 1);
  };
  const onIncrease = () => {
    SetContentCount(contentCount + 1);
  };
  return (
    <>
      <div className="container-sm mt-5 mb-6">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`${process.env.PUBLIC_URL}/images/list/card${id}.jpg`}
              alt={findId.title}
            />
          </div>
          <div className="col-md-6 mt-4 detail-order">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <div className="flex mt-3">
              <p className="after-col">금액</p>
              <p>{`${findId.price.toLocaleString('ko-KR')}원`}</p>
            </div>
            <div className="flex mt-2">
              <p className="after-col">수량</p>
              <p className="content-count">
                <button onClick={contentCount > 0 ? onDecrease : null}>
                  -
                </button>
                <span>{contentCount}</span>
                <button onClick={onIncrease}>+</button>
              </p>
            </div>
            <div className="button-hr">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  props.dispatch({
                    type: "contentsAdd",
                    payload: {
                      id: findId.id,
                      name: findId.title,
                      quan: contentCount,
                      price: findId.price,
                    },
                  });
                  history.push("/cart");
                }}
              >
                장바구니 담기
              </button>
              <button type="button" className="btn btn-secondary">
                바로 주문
              </button>
            </div>
            {isNotice ? (
              <div className="noticeBox">재고가 얼마 남지 않았습니다.</div>
            ) : null}
          </div>
        </div>
        <div className="mt-5">
          <p className="pTitle">코디아이템</p>

          <div className=""></div>
          <a
            className="event my-5"
            href="https://mixxo.com/product/project.html?cate_no=89"
            target="_balnk"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/detail/event.jpg`}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="container-sm">
        <div className="row">
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  SetTabsOn(false);
                  SetTabs("info");
                }}
              >
                상세정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  SetTabsOn(false);
                  SetTabs("shipping");
                }}
              >
                상품후기
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  SetTabsOn(false);
                  SetTabs("refund");
                }}
              >
                상품문의
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="container-sm py-5">
        <div className="row">
          <CSSTransition in={tabsOn} classNames="tabsTransition" timeout={500}>
            <TabContent tabs={tabs} SetTabsOn={SetTabsOn} />
          </CSSTransition>
        </div>
      </div>
      <Banner />
    </>
  );
}
function TabContent(props) {
  return <div>{tabUi[props.tabs]}</div>;
}

function DetailState(state) {
  return {
    state: state.reducer,
    alertstate: state.alertReducer,
  };
}

export default connect(DetailState)(Detail);
