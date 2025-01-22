import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/check");
      const data = await response.json();
      console.log(data, import.meta.env.VITE_BACKEND_URL);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleClick}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Fetch Data"}
      </button>
    </div>
  );
}

export default App;
