/* eslint-disable */
import React, { useState, lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "Components/NavBar";
const List = lazy(() => {
  return import("Components/List");
});
const Detail = lazy(() => {
  return import("Components/Detail");
});
const About = lazy(() => {
  return import("Components/About");
});
const Cart = lazy(() => {
  return import("Components/Cart");
});
import Data from "Components/Data";
import Footer from "Components/Footer";
import axios from "axios";

function App() {
  const [dataList, SetDataList] = useState(Data);
  function moreInformation() {
    axios
      .get("https://floraroh.github.io/shop/data.json")
      .then((result) => {
        const AddDataList = [...dataList].concat(result.data);
        SetDataList(AddDataList);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }
  return (
    <>
      <Suspense
        fallback={
          <div className="spinner-wrap">
            <div className="spinner-border my-5" role="status">
              <span className="sr-only"></span>
            </div>
            <p>Lodaing....</p>
          </div>
        }
      >
        <NavBar />
        <Switch>
          <Route path="/shop_pwa" exact={true}>
            <List dataList={dataList} />
            <div className="text-center mb-5">
              <button
                type="button"
                className="btn font-bold more"
                onClick={moreInformation}
              >
                더 보기
              </button>
            </div>
            {/* <AA /> */}
            {/* </ContentContext.Provider> */}
          </Route>
          <Route path="/detail/:id">
            {/* path="/detail/:id" <- :id가 useParam으로 넘어가는 값이다! :path_id 로 넣으면 console창에 path_id로 나타남*/}
            <Detail dataList={dataList} />
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
}
export default App;
