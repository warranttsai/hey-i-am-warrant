// module
import { useState } from "react";
import { Alert } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// scss
import "../styles/ReactChallenge.scss";
// styled components
import {
  Flex1,
  FlexColumnCenteredContainer,
  FlexRowCenteredContainer,
} from "./styled-component/Container";
import { BlackCenterTitle } from "./styled-component/Title";
import WarningBalloon from "./WarningBalloon";

export function Challenge1() {
  const [content, setContent] = useState<string>("");

  const calculateWords = (value: string) => {
    let strBuf = "";
    let counter = 0;
    const lenValue: number = +value.length;
    for (const [index, item] of value) {
      console.log(index, item);
      strBuf += item;
      if (item === " " || +index === lenValue - 1) {
        // If the letter is space or reached the end of content
        if (strBuf.match(/^[A-Za-z0-9]/g)) {
          counter += 1;
        }
        strBuf = "";
      }
    }
    return counter;
  };
  const calculateLetters = (value: string) => {
    let strBuf = "";
    for (const item of value) {
      if (item.match(/[A-Za-z0-9]/g)) {
        strBuf += item;
      }
    }
    return strBuf;
  };
  const calculateSentences = (value: string) => {
    const strArr = value.split(". ");
    return strArr.length;
  };

  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>Challenge #1: Text Analyzer Tool</BlackCenterTitle>
      {/* Introduction */}
      <span id="challenge1-introduction">
        It is an easy challenge in which you have to build logic for a text
        analyzer that will count the number of words, letters, paragraphs, and
        more of the text written in the textarea.
      </span>
      <div id="challenge1-anser" style={{ marginBlock: 10, width: "80%" }}>
        <textarea
          className="w-100"
          style={{ background: "white", color: "black", minHeight: 300 }}
          value={content}
          placeholder="Please type in your text here..."
          onChange={(e) => setContent(e.target.value)}
        />
        <FlexColumnCenteredContainer>
          <Flex1>
            <label>Number of words: </label>
            <span>{content ? calculateWords(content) : 0}</span>
          </Flex1>
          <Flex1>
            <label>Number of letters: </label>
            <span>{content ? calculateLetters(content).length : 0}</span>
          </Flex1>
          <Flex1>
            <label>Number of sentences: </label>
            <span>{content ? calculateSentences(content) : 0}</span>
          </Flex1>
          <Flex1>
            <label>Number of paragraphs: </label>
            <span>{content ? content.split("\n").length : 0}</span>
          </Flex1>
        </FlexColumnCenteredContainer>
      </div>
    </FlexColumnCenteredContainer>
  );
}

export function Challenge2() {
  const [desiredCharacter, setDesiredCharacter] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  // display states
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);

  const handleGeneratePassword = () => {
    /* password validation
     * more than 8 words
     * minimum 1 upper case and 1 lower case letter
     * including at least 1 special character
     */
    let passwordBuf = desiredCharacter;
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!@#$%^&*()_+";
    const getRandomElement = (array: string) => {
      return array[Math.floor(Math.random() * array.length)];
    };
    // Generate random uppercase letter
    passwordBuf += getRandomElement(uppercaseLetters);
    // Generate random lowercase letter
    passwordBuf += getRandomElement(lowercaseLetters);
    // Generate random special character
    passwordBuf += getRandomElement(specialCharacters);
    // Generate remaining random words
    const remainingWords = 8 - passwordBuf.length; // adjust the number of words as per your requirement
    const allCharacters =
      uppercaseLetters + lowercaseLetters + specialCharacters;

    for (let i = 0; i < remainingWords; i++) {
      passwordBuf += getRandomElement(allCharacters);
    }
    setNewPassword(passwordBuf);
    setShowSuccessMessage(true);
  };
  const handleClickCopy = () => {
    navigator.clipboard.writeText(newPassword).catch(() => {
      alert("Copy error!");
    });
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 1000);
  };

  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>
        Challenge #2: React Password Generator
      </BlackCenterTitle>
      <FlexColumnCenteredContainer style={{ gap: 10 }}>
        {/* Introduction */}
        <Flex1>
          <span>
            This challenge is suitable for beginners as well. In this challenge,
            you will develop logic for a password generator, including options
            for creating and validating a password with a specified strength,
            copying the password, and passwords with desired characters.
          </span>
        </Flex1>
        {/* Answer */}
        <Flex1 className="w-100">
          <textarea
            style={{
              background: "white",
              color: "black",
              width: "50%",
              minHeight: 100,
            }}
            value={desiredCharacter}
            placeholder="Please put in your desired character..."
            onChange={(e) => {
              setDesiredCharacter(e.target.value);
              setShowSuccessMessage(false);
            }}
          />
        </Flex1>
        {/* Generate Nutton */}
        <Flex1>
          <button onClick={handleGeneratePassword}>
            Generate your password!
          </button>
        </Flex1>
        {/* Warning Message */}
        <Flex1
          className="w-100 d-flex flex-column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {showSuccessMessage && (
            <>
              <Alert severity="success">Success!</Alert>
              <br />
            </>
          )}
          {/* New Password */}
          <FlexRowCenteredContainer
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="flex-5"
              style={{
                background: "white",
                color: "black",
              }}
              value={newPassword}
              disabled
            />
            <ContentCopyIcon
              className="flex-1 cursor-pointer"
              onClick={handleClickCopy}
            />
          </FlexRowCenteredContainer>
        </Flex1>
      </FlexColumnCenteredContainer>
      {/* Copy Message */}
      {showCopyMessage && (
        <WarningBalloon
          message="Your password had been copied to your clipboard!"
          colour="green"
        />
      )}
    </FlexColumnCenteredContainer>
  );
}

export function Challenge3() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>Challenge #3: Random Quote Generator</BlackCenterTitle>
      <span>
        Challenge yourself to build a random quote generator using ReactJS and
        showcase your front-end development skills. Flourish your creativity
        with this fun code challenge! This challenge differs slightly from Text
        Analyzer and Password Generator because you need to fetch data from
        json-server using Axios.
      </span>
    </FlexColumnCenteredContainer>
  );
}

export function Challenge4() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: 100 }}>
      <BlackCenterTitle>
        Challenge #4: CRUD Typescript Tasklist App
      </BlackCenterTitle>
      <span>
        This React Typescript Tasklist/Todo challenge requires you to perform
        CRUD operations with instructions to write clean, reusable, manageable,
        and scalable code. This challenge is different and more challenging than
        the last three challenges you have completed. If you can complete this
        ReactJS Typescript Tasklist challenge independently, you can be easily
        hired as an intern/junior React developer.
      </span>
    </FlexColumnCenteredContainer>
  );
}
