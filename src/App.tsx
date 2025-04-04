import Clock from "./Clock";
import "./App.css";

function App() {
  return (
    <>
      <p>いつからかの時を刻んでいる。</p>
      <Clock AHEpoch={Date.parse(import.meta.env.VITE_AH_EPOCH)} />
    </>
  );
}

export default App;
