/**
 * SuggestionsList Component
 * - Renders dropdown list of suggestions
 */
function SuggestionsList({ suggestions }) {
  if (suggestions.length === 0) return null;

  return (
    <ul className="suggestions-list">
      {suggestions.map((item, index) => (
        <li key={index} className="suggestion-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionsList;
