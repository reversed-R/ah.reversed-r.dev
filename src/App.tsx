import Clock from "./Clock";
import "./App.css";

function App() {
  return (
    <>
      <Clock AHEpoch={Date.parse(import.meta.env.VITE_AH_EPOCH)} />
    </>
  );
}

export default App;
