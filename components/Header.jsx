// modules
import React from "react";
import { Toolbar, AppBar, Button, Box } from "@mui/material";
import Link from "next/link";
import { FlexRowCenteredContainer } from "./styled-component/Container";
// import { useNavigate } from "react-router-dom";

function Header() {
  // const navigate = useNavigate();

  return (
    <AppBar id="header-app-bar" position="static" sx={{ flexDirection: "row" }}>
      <FlexRowCenteredContainer
        style={{
          justifyContent: "space-between",
          padding: "15px 20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          id="header-logo"
          color="inherit"
          href="/"
          sx={{ fontSize: "2rem", padding: "0" }}
        >
          🏡
        </Link>
        <Box
          id="header-box"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            className="button-hover-yellow-border"
            style={{ backgroundColor: "#a53d38" }}
          >
            <Link color="inherit" href="/aboutme">
              ABOUT ME
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            className="button-hover-yellow-border"
            style={{ backgroundColor: "#a53d38" }}
          >
            <Link color="inherit" href="/learningpath">
              LEARNING PATH
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            className="button-hover-yellow-border"
            style={{ backgroundColor: "#a53d38" }}
          >
            <Link color="inherit" href="/mysideprojects">
              SIDE PROJECTS
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            className="button-hover-yellow-border"
            style={{ backgroundColor: "#a53d38" }}
          >
            <Link color="inherit" href="/myhobbies">
              HOBBIES
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            className="button-hover-yellow-border"
            style={{ backgroundColor: "#a53d38" }}
          >
            <Link color="inherit" href="/workingexperience">
              WORKING EXPERIENCE
            </Link>
          </Button>
        </Box>
      </FlexRowCenteredContainer>
    </AppBar>
  );
}

export default Header;
