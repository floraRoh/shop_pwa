import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import "styles/cart.scss";

function Cart(props) {
  const state = useSelector((state) => state);
  // const state = useSelector((state) => state.reducer); 
  // 다 가져오지않고 위 코드처럼 state.가져올reducer이름 을 넣어서도 가능하다.
  const dispatch = useDispatch();
  const [alertStates, SetalertStates] = useState(true);
  return (
    <>
      <div className="table-wrap px-5 py-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>no.</th>
              <th>상품명</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            {/* {props.state.map((data, i) => { */}
            {state.reducer.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td className="quan-line">
                    <button
                      className="button"
                      onClick={() => {
                        // props.dispatch({ type: "minus" });
                        dispatch({ type: "minus" , index : data.id - 1 });
                      }}
                    >
                      -
                    </button>
                    {data.quan}
                    <button
                      className="button"
                      onClick={() => {
                        dispatch({ type: "add" , index : data.id - 1});
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{data.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* {props.alertstate === true ? (
        <div className="alert">
          <p>지금 구매하면 20%</p>
          <button onClick={() => {
            props.dispatch({type: "close"});
          }}>닫기</button>
        </div>
      ) : null} */}
      {alertStates === true ? (
        <div className="alert">
          <p>지금 구매하면 20%</p>
          <button
            onClick={() => {
              SetalertStates(false);
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </>
  );
}
// function CartState(state) {
//   // redux store의 데이터를 가져와서 props로 변환해주는 함수
//   return {
//     //상품명 : state.name, // index에 있는 store정보 가져오기!
//     state: state.reducer, // state라는 이름의 props로 변경하기
//     alertstate: state.alertReducer,
//   };
// }
// export default connect(CartState)(Cart);
export default Cart;
