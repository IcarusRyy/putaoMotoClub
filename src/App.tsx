import { Button } from "antd"
import { useState } from "react"
import "./index.scss"
function App() {
  return (
    <>
      <div className="base-color">111111</div>
      <div style={{ color: "pink" }}>222</div>
      <Button type="primary" className="bgc">
        测试
      </Button>
    </>
  )
}

export default App
