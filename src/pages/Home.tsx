import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
