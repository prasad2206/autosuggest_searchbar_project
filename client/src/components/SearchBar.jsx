import { useState } from "react";
import SuggestionsList from "./SuggestionsList";

/**
 * SearchBar Component
 * - Handles input state
 * - Displays suggestions dropdown
 */
function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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

    if (value.length > 0) {
      const filtered = sampleData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <SuggestionsList suggestions={suggestions} />
    </div>
  );
}

export default SearchBar;
