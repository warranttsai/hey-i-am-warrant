// modules
import { Button, FormControl, FormLabel } from "@mui/material";
import {} from "@mui/material";
// styled-components
import { BlackTitle } from "../../styled-component/Title";
import { FlexRowCenteredContainer } from "../../styled-component/Container";
import React from "react";

export default function ContactSection() {
  return (
    <div
      className="d-flex flex-column text-left"
      style={{ paddingInline: "10vw" }}
    >
      <FormControl fullWidth>
        <BlackTitle>Contact With Me</BlackTitle>
        {/* Social Media Buttons */}
        <FlexRowCenteredContainer
          style={{
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          <Button
            id="linkedin-facebook-button"
            className="flex-1 button-hover-blue"
            style={{ background: "grey", fontSize: "0.75rem", width: "auto" }}
            size="small"
            variant="contained"
            data-testid="linedin-button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/warrant-tsai-20463414b/",
                "_blank"
              )
            }
          >
            LinkedIn
          </Button>
          <Button
            id="instagram-facebook-button"
            className="flex-1 button-hover-blue"
            style={{ background: "grey", fontSize: "0.75rem", width: "auto" }}
            size="small"
            variant="contained"
            color="success"
            data-testid="instagram-button"
            onClick={() =>
              window.open(
                "https://www.instagram.com/warrant_job_hunting/",
                "_blank"
              )
            }
          >
            Instagram
          </Button>
          <Button
            id="footer-facebook-button"
            className="flex-1 button-hover-blue"
            style={{ background: "grey", fontSize: "0.75rem", width: "auto" }}
            size="small"
            variant="contained"
            color="success"
            data-testid="facebook-button"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100007257571234",
                "_blank"
              )
            }
          >
            Facebook
          </Button>
        </FlexRowCenteredContainer>
        <br />
        <FormLabel htmlFor="contact-email">
          Email: warrant1997@gmail.com
        </FormLabel>
        <FormLabel htmlFor="contact-mobile">Mobile: 0450601208</FormLabel>
      </FormControl>
    </div>
  );
}
