import { useTheme } from '../../context/ThemeContext';
import "./ThemeToggle.css"

const ThemeToggle = () => {

    const { darkMode, setDarkMode } = useTheme();

    return (
        <label className="toggle-button">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(prev => !prev)} aria-label="Toggle theme" />
            {darkMode ? (
                <svg className="sun" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="25" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"></path></svg>
                ) : (<i className="fa-regular fa-moon"></i>)}
        </label>
    )
}

export default ThemeToggle;