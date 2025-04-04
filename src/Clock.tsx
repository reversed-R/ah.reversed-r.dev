import { useState } from "react";

type Props = {
  AHEpoch: number;
};

const Clock = ({ AHEpoch }: Props) => {
  const [AHTime, setTime] = useState(new Date().getTime() - AHEpoch);

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
