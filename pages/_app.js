// modules
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
// css
import "../styles/global.css";
// styled component
import { VerticalButtons } from "../components/styled-component/Button";
import { BrownCenterTitle } from "../components/styled-component/Title";

export default function App() {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <>
      <Head>
        <title>Hey I Am Warrant Tsai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
        style={{
          paddingInline: "20vw",
          minHeight: "100vh",
        }}
      >
        <BrownCenterTitle id="home-title">
          Warrant TSAI <br />
          Web Developer / Street Dancer
        </BrownCenterTitle>
        <VerticalButtons>
          <Button
            variant="contained"
            id="about-me-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "aboutme")}
          >
            About Me
          </Button>
          <Button
            variant="contained"
            id="learning-path-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "learningpath")}
          >
            Learning Path
          </Button>
          <Button
            variant="contained"
            color="success"
            id="my-side-project-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "mysideprojects")}
          >
            My Side Projects
          </Button>
          <Button
            variant="contained"
            color="success"
            id="coding-bible-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "mycodingbible")}
          >
            Coding Bible
          </Button>
          <Button
            variant="contained"
            id="laboratory-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "lab")}
          >
            Laboratory
          </Button>

          <Button
            variant="contained"
            id="my-hobbies-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "myhobbies")}
          >
            My Hobbies
          </Button>
          <Button
            variant="contained"
            data-testid="working-experience-app-button"
            className="w-100"
            sx={{
              ":hover": {
                bgcolor: "#D7F72A",
                color: "black",
              },
              maxWidth: 300,
            }}
            onClick={(e) => handleClick(e, "workingexperience")}
          >
            Working Experience
          </Button>
        </VerticalButtons>
      </main>
    </>
  );
}
