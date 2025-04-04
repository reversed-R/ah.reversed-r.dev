import { useState } from "react";
import "./Clock.css";

type Props = {
  AHEpoch: number;
};

const Clock = ({ AHEpoch }: Props) => {
  const [AHTime, setTime] = useState(Math.floor((Date.now() - AHEpoch) / 1000));

  setTimeout(() => {
    setTime(AHTime + 1);
  }, 1000);

  return <p id="clock">{AHTime}</p>;
};

export default Clock;
