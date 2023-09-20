import { authors } from "../db";
import { Link, useParams } from "react-router-dom";

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
          {author.bookTitle.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Author;
