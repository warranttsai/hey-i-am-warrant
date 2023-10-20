// modules
import React from "react";
import { Toolbar, AppBar, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

function Header() {
  // const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          // onClick={() => navigate("/")}
          sx={{ marginRight: "auto", fontSize: "25px", padding: "0" }}
        >
          🏡
        </Button>
        {/* <Box>
          <Button color="inherit" onClick={() => navigate("aboutme")}>
            ABOUT ME
          </Button>
          <Button color="inherit" onClick={() => navigate("learningpath")}>
            LEARNING PATH
          </Button>{" "}
          <Button color="inherit" onClick={() => navigate("mysideprojects")}>
            My SIDE PROJECTS
          </Button>
          <Button color="inherit" onClick={() => navigate("/mycodingbible")}>
            Coding Bible
          </Button>
          <Button color="inherit" onClick={() => navigate("lab")}>
            Laboratory
          </Button>
          <Button color="inherit" onClick={() => navigate("myhobbies")}>
            MY HOBBIES
          </Button>
          <Button color="inherit" onClick={() => navigate("workingexperience")}>
            WORKING EXPERIENCE
          </Button>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
