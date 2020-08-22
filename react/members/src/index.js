//入口文件
import React from "react";    //es6 import关键字 全面使用es6语法
import ReactDOM from "react-dom";
import "./styles.css";  //css wxss app.css
//react语法   背后小程序的结合点
import { MyComponent } from './demo'

function App() {
  return (
    //  JSX
    <div className="App">
      App
      <MyComponent/>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);