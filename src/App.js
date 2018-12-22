import React, { Component, Fragment } from "react"
import "./App.css"

class App extends Component {
  render() {
    const text = "당신은 어썸한가요?"
    const condition = true
    const style = {
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: "all",
      MozTransition: "all",
      msTransition: "all"
    }
    return (
      // <Fragment>
      //   <h1>리액트 안녕!</h1>
      //   <h2>Fragment를 사용해봤어</h2>
      // </Fragment>
      <div className="my-div">
        <h1>리액트 안녕?</h1>
        <h2>{text}</h2>
        {/* 주석은 이렇게 넣을 수 있어요 */}
        {condition ? "참" : "거짓"}
        <br />
        {condition ? "삼항 연산자 보여주세요" : null}
        <br />
        {condition && "&&를 사용했어요 보여주세요"}
        <div style={style} /* 주석을 이렇게 쓸수도 있어요 */ />
        // 여기 쓰는 건 그대로 렌더링 됩니다. /* 여기에서는 주석을 못 써요 */
      </div>
    )
  }
}

export default App
