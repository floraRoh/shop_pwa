/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "styles/detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
// 컴포넌트 등장/업데이트 시 transition을 쉽게쉽게 줄 수 있음

const tabUi = {
  info: <div>상품정보</div>,
  shipping: <div>배송관련</div>,
  refund: <div>환불약관</div>,
};
function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const findId = props.dataList.find((x) => x.id == id);
  const [isNotice, SetIsNotice] = useState(true);
  const [input, SetInput] = useState("");
  const [tabs, SetTabs] = useState("");
  const [tabsOn, SetTabsOn] = useState(false);
  const [contentCount, SetContentCount] = useState(0);

  const onChange = (e) => {
    SetInput(e.target.value);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      // document.querySelector('.noticeBox').style.display="none";
      SetIsNotice(false);
    }, 2000);
    return () => {
      clearTimeout(timer); // 버그방지
    };
  }, [isNotice]); // isNotice 업데이트 될 때만 실행해주세요. 안 넣으면 계속 업데이트됨
  // [] => 페이지가 로드 됐을때만 실행됨 (트릭같은거)
  const onDecrease = () => {
    SetContentCount(contentCount - 1);
  };
  const onIncrease = () => {
    SetContentCount(contentCount + 1);
  };

  return (
    <>
      <p>{input}</p>
      <input onChange={onChange} />
      <div className="container mt-6 mb-6">
        <div className="row">
          <div className="col-md-6">
            <img src={findId.image} alt={findId.title} />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{`금액 : ${findId.price}원`}</p>
            <p className="">
              {`수량 : `}
              <button onClick={contentCount > 0 ? onDecrease : null}>-</button>
              <span>{contentCount}</span>
              <button onClick={onIncrease}>+</button>
            </p>
            <button
              type="button"
              className="btn btn-danger"
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
            {isNotice ? (
              <div className="noticeBox">재고가 얼마 남지 않았습니다.</div>
            ) : null}
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              SetTabsOn(false);
              SetTabs("info");
            }}
          >
            Active
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
            Option 2
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
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={tabsOn} classNames="tabsTransition" timeout={500}>
        <TabContent tabs={tabs} SetTabsOn={SetTabsOn} />
      </CSSTransition>
    </>
  );
}
function TabContent(props) {
  return <div>{tabUi[props.tabs]}</div>;
  // if (props.tabs === 0) {
  //   return <div>0번째 내용입니다.</div>;
  // } else if (props.tabs === 1) {
  //   return <div>1번째 내용입니다.</div>;
  // } else {
  // }
}

function DetailState(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertstate: state.alertReducer,
  };
}

export default connect(DetailState)(Detail);
