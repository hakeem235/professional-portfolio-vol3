import "./portfolioList.scss";
import PropTypes from "prop-types";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setSelected(id);
        }
        }
      }}
      // Role 'option' is used as this item is part of a 'listbox' (the parent ul in Portfolio.js).
      // 'aria-selected' indicates the currently active/selected item in the listbox.
      role="option"
      tabIndex="0"
      aria-selected={active}
    >
      {title}
    </li>
  );
}

PortfolioList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
};
