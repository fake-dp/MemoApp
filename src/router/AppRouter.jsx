import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import HomeGuidePage from "../pages/HomeGuidePage";

function AppRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeGuidePage />}></Route>
        <Route path="/daily" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
