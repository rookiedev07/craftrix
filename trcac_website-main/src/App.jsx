// App.jsx
import { useState, useEffect } from "react";
import LoadingPage from "./Page/LoadingPage";
import HomePage from "./Page/Home_Page";


const App = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // ⏳ Show HomePage after 3 seconds
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 4000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>
      {showHome ? <HomePage /> : <LoadingPage />}
    </div>
  );
};

export default App;
