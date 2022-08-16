import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return(
    <>
      HomePage
      <Link to={
        {
          pathname:'/a'
        }
      }>aa</Link>
    </>
  )
}
export default HomePage