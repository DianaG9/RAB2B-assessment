import { DarkMode } from "../features/DarkMode.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [theme, toggleTheme] = DarkMode();

  return (
    <label className="toggle" aria-label="Toggle dark/light theme">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="slider">
      <FontAwesomeIcon icon={faSun} className="icon_sun" />
      <FontAwesomeIcon icon={faMoon} className="icon_moon" />
      </span>
    </label>
  );
};

export default ThemeToggle;