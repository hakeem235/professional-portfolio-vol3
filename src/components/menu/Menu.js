import "./menu.scss";
import PropTypes from "prop-types";

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleItemClick = () => {
    setMenuOpen(false);
  };

  const handleItemKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setMenuOpen(false);
    }
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          onClick={handleItemClick}
          onKeyDown={handleItemKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={handleItemClick}
          onKeyDown={handleItemKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={handleItemClick}
          onKeyDown={handleItemKeyDown}
          role="menuitem"
          tabIndex="0"
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
