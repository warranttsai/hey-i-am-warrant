// module
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Divider } from "@mui/material";
// styled-components
import { LabSection } from "../components/styled-component/Container";
// components
import AboutThisWebApp from "../components/AboutThisWebApp";
import {
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
} from "../components/ReactChallenges";

export default function Lab() {
  const [showAboutThisWebsite, setShowAboutThisWebsite] = useState(false);
  const [showReactChallenges, setShowReactChallenges] = useState(-1);

  return (
    <>
      {/* About this web application */}
      <LabSection>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button onClick={() => setShowAboutThisWebsite(true)}>
            <h1
              className="hyper-link-style"
              style={{ fontSize: "1.5rem", color: "blue", textAlign: "center" }}
            >
              📚 Something About This Web Application 📚
            </h1>
          </Button>
          {showAboutThisWebsite && <AboutThisWebApp />}
        </motion.div>
      </LabSection>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* React Challenges */}
      <LabSection>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.codevertiser.com/free-reactjs-coding-challenges-for-responsive-UI/"
            target="_blank"
          >
            <h1
              className="hyper-link-style"
              style={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
            >
              React Challenge ➤
            </h1>
          </a>
          <Button onClick={() => setShowReactChallenges(1)}>
            challenge #1
          </Button>
          <Button onClick={() => setShowReactChallenges(2)}>
            challenge #2
          </Button>
          <Button onClick={() => setShowReactChallenges(3)}>
            challenge #3
          </Button>
          <Button onClick={() => setShowReactChallenges(4)}>
            challenge #4
          </Button>
        </motion.div>
        {showReactChallenges === 1 && <Challenge1 />}
        {showReactChallenges === 2 && <Challenge2 />}
        {showReactChallenges === 3 && <Challenge3 />}
        {showReactChallenges === 4 && <Challenge4 />}
      </LabSection>
    </>
  );
}
