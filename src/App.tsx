import React from "react"
import { Button } from "antd"
import { useState } from "react"
import "./index.scss"
function App() {
  const [count, setCount] = useState<number>(1)
  const handleCount = (str:string) => {
    console.log(str)
    const a = 1
    setCount(count+1)
  }
  return (
    <>
      <div className="base-color">111111</div>
      <div style={{ color: "pink" }}>222</div>
      <div>{count}</div>
      <Button type="primary" className="bgc" onClick={()=>handleCount('a')}>
        测试a
      </Button>
    </>
  )
}

export default App
