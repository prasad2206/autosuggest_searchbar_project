import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
    </div>
  );
}

export default App;
