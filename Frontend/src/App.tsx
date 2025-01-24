import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { RequestBody } from "@/lib/types/type";


function App() {
  const [loading, setLoading] = useState(false);


  const handleClick = async () => {
    setLoading(true);
    try {
      // const payload : RequestBody  = {
      //   name: "John Doe"
      // }
// Now send this payload as body
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
      <Button
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Data"}
      </Button>
    </div>
  );
}

export default App;
