import { authors } from "../db";
import { Link, Outlet, useParams } from "react-router-dom";

function Author() {
  const { authorName } = useParams();
  const filteredAuthors = authors.filter(
    (author) => author.name === authorName
  );

  return (
    <div>
      <h1>{authorName}</h1>
      {filteredAuthors.map((author) => (
        <ul key={author.id}>
          {author.bookList.map((title, index) => (
            <li key={index}>
              <Link to={title}>{title}</Link>
            </li>
          ))}
        </ul>
      ))}
      <Outlet />
    </div>
  );
}

export default Author;
