import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NAvbar from "./components/Navbar/NAvbar";
import PriceList from "./components/PriceList/PriceList";
import Daashboard from "./components/Dashboard/Daashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NAvbar />
        <h2 className="text-7xl text-purple-600 text-center mb-5">thiiis is tailwind</h2>
      </div>
      <PriceList />
      <Daashboard />
    </>
  );
}

export default App;
