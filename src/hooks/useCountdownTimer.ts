import { useEffect, useRef, useState } from "react";

const useCountdownTimer = (initialCountInSeconds: number) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(
    initialCountInSeconds
  );
  const [timerStatus, setStatus] = useState<"Started" | "Stopped">("Started");

  const secondsToDisplay: number = secondsRemaining % 60;
  const minutesRemaining: number = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay: number = minutesRemaining % 60;
  const hoursToDisplay: number = (minutesRemaining - minutesToDisplay) / 60;

  const toTwoDigits = (num: number) => String(num).padStart(2, "0");

  const startTimer = () => {
    setStatus("Started");
  };
  const resetTimer = () => {
    setSecondsRemaining(initialCountInSeconds);
    setStatus("Started");
  };

  const useInterval = (callback: any, delay: any) => {
    const savedCallback = useRef<any>();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus("Stopped");
      }
    },
    timerStatus === "Started" ? 1000 : null
  );

  return {
    hoursToDisplay,
    minutesToDisplay,
    secondsToDisplay,
    timerStatus,
    startTimer,
    resetTimer,
    toTwoDigits,
  };
};

export default useCountdownTimer;
