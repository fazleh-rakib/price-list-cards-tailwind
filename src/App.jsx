import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NAvbar from "./components/Navbar/NAvbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NAvbar />
        <h2 className="text-7xl text-purple-600">thiiis is tailwind</h2>
      </div>
    </>
  );
}

export default App;