import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Root = () => {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default Root;
