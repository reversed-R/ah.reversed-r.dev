import { useState } from "react";

type Props = {
  AHEpoch: number;
};

const Clock = ({ AHEpoch }: Props) => {
  const [AHTime, setTime] = useState(Math.floor((Date.now() - AHEpoch) / 1000));

  setTimeout(() => {
    setTime(AHTime + 1);
  }, 1000);

  return (
    <div>
      <p>{AHTime}</p>
    </div>
  );
};

export default Clock;
