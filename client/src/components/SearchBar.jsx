import { useState } from "react";
import SuggestionsList from "./SuggestionsList";

/**
 * SearchBar Component
 * - Handles input state, keyboard navigation, selection
 */
function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // for keyboard navigation
  const [selected, setSelected] = useState(false); // ✅ added to fix "No matches found" bug

  // Dummy static data (later API se replace karenge)
  const sampleData = [
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL Server",
    "C# .NET",
    "ASP.NET Core"
  ];

  // Filter suggestions based on input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    setSelected(false); // ✅ reset selected when typing

    if (value.length > 0) {
      const filtered = sampleData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Keyboard navigation (↑ ↓ Enter)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(suggestions[activeIndex]);
      setSuggestions([]);
      setActiveIndex(-1);
      setSelected(true); // ✅ mark as selected
    }
  };

  // Handle click selection
  const handleSelect = (value) => {
    setQuery(value);
    setSuggestions([]);
    setActiveIndex(-1);
    setSelected(true); // ✅ mark as selected
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <SuggestionsList
        suggestions={suggestions}
        query={query}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        selected={selected} // ✅ pass selected state to SuggestionsList
      />
    </div>
  );
}

export default SearchBar;
