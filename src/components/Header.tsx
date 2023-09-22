import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const onAboutClick = () => {
    nav("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
