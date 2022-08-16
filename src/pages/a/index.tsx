import React from "react";
import { Link } from "react-router-dom";

const APage = () => {
  return(
    <>
      APage
      <Link to={{
        pathname:"aaaa"
      }}>重定向</Link>
    </>
  )
}
export default APage