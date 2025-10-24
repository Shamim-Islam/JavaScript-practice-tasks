import { use } from "react";
import User from "./User";

const Users = ({ userPromise }) => {
  const users = use(userPromise);
  console.log(users);
  return (
    <div>
      <h1 className="text-8xl">Hello world</h1>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
