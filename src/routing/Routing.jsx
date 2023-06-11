import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Shop from "../pages/shop/Shop";

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