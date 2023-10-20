// modules
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
// css
// components
import Layout from "./layout";
// styled component
import { VerticalButtons } from "../components/styled-component/Button";
import { BrownCenterTitle } from "../components/styled-component/Title";

export default function Index() {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main sylte={{ paddingInline: "20vw" }}>
          <BrownCenterTitle data-testid="home-title">
            Greetings! <br />
            Welcome to Warrant's website!
          </BrownCenterTitle>
          <VerticalButtons>
            <Button
              variant="contained"
              data-testid="about-me"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "aboutme")}
            >
              About Me
            </Button>
            <Button
              variant="contained"
              data-testid="learning-path"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "learningpath")}
            >
              Learning Path
            </Button>
            <Button
              variant="contained"
              color="success"
              data-testid="learning-path"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "mysideprojects")}
            >
              My Side Projects
            </Button>
            <Button
              variant="contained"
              color="success"
              data-testid="learning-path"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "mycodingbible")}
            >
              Coding Bible
            </Button>
            <Button
              variant="contained"
              data-testid="laboratory"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "lab")}
            >
              Laboratory
            </Button>

            <Button
              variant="contained"
              data-testid="my-hobbies"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "myhobbies")}
            >
              My Hobbies
            </Button>
            <Button
              variant="contained"
              data-testid="working-experience"
              sx={{
                ":hover": {
                  bgcolor: "#D7F72A",
                  color: "black",
                },
                width: "300px",
              }}
              onClick={(e) => handleClick(e, "workingexperience")}
            >
              Working Experience
            </Button>
          </VerticalButtons>
        </main>
      </Layout>
    </>
  );
}
