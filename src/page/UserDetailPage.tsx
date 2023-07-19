import { Params, useLoaderData } from "react-router-dom";
import { getUser } from "../services/networking";

const UserDetail = () => {
  const user = useLoaderData();

  console.log(user);
  return <div>User details</div>;
};

export default UserDetail;

export const loader = ({ params }: { params: Params<"id"> }) => {
  const paramId = params.id || "";

  return getUser(paramId);
};
