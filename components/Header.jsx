// modules
import React from "react";
import { Toolbar, AppBar, Button, Box } from "@mui/material";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";

function Header() {
  // const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar className="w-100">
        <Link color="inherit" href="/" sx={{ fontSize: "25px", padding: "0" }}>
          🏡
        </Link>
        <Box sx={{ marginLeft: "auto" }}>
          <Link color="inherit" href="/aboutme">
            ABOUT ME
          </Link>
          <Link color="inherit" href="/learningpath">
            LEARNING PATH
          </Link>
          <Link color="inherit" href="/mysideprojects">
            SIDE PROJECTS
          </Link>
          <Link color="inherit" href="/mycodingbible">
            CODING BIBLE
          </Link>
          <Link color="inherit" href="/lab">
            LABORATORY
          </Link>
          <Link color="inherit" href="/myhobbies">
            HOBBIES
          </Link>
          <Link color="inherit" href="/workingexperience">
            WORKING EXPERIENCE
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
