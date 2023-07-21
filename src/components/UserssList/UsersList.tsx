import { User } from "../../types";
import UserCardStyle from "./userCard/UserCardStyle";

type Props = {
  users: User[];
};

const UsersList = ({ users = [] }: Props) => {
  return (
    <>
      {users.map(_ => <UserCardStyle user = {_}/>)}
    </>
  );
}

export default UsersList;
