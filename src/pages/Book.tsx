import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function Book() {
  const { bookName } = useParams();

  return (
    <div>
      <h2>{bookName}</h2>
      <div>
        <Link to="chapters">Chapters</Link>
      </div>
      <div>
        <Link to="characters">Characters</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Book;
