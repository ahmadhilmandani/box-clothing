import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";

export function Shop() {
  return (
    <h1>Shop</h1>
  )
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}
export default Routing