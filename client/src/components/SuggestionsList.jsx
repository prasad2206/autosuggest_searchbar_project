/**
 * SuggestionsList Component
 * - Renders dropdown list of suggestions
 * - Supports active item highlight and query highlighting
 */
import React from "react";

function SuggestionsList({ suggestions, query, activeIndex, onSelect, selected }) {
  if (query.trim() === "") return null;

  return (
    <ul className="suggestions-list">
      {suggestions.length > 0 ? (
        suggestions.map((item, index) => (
          <li
            key={index}
            className={`suggestion-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))
      ) : (
        !selected && <li className="no-match">No matches found</li>
      )}
    </ul>
  );
}

export default SuggestionsList;
