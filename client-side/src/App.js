import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/user_info" element={<UserInfo />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
