import { useState, useEffect } from "react";
import style from "./WarningBalloon.module.scss";

const WarningBalloon = ({ message, colour }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Set the duration for the balloon to be visible (in milliseconds)

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Reset visibility after 4 seconds to show the balloon again
    if (!isVisible) {
      const resetTimer = setTimeout(() => {
        setIsVisible(true);
      }, 4000); // Set the duration for the balloon to stay hidden (in milliseconds)

      return () => clearTimeout(resetTimer);
    }
  }, [isVisible]);

  return isVisible ? (
    <div className={style["warning-balloon"]} style={{ background: colour }}>
      <span className={style["warning-text"]}>{message}</span>
    </div>
  ) : null;
};

export default WarningBalloon;
