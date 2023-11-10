"use client";
// modules
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// styled-components
import { BrownCenterTitle } from "../styled-component/Title";

export default function Fila() {
  return (
    <>
      <Card
        id="fila-container"
        sx={{
          background: "white",
          border: "5px solid rgba(3, 102, 214, 0.3)",
          textAlign: "left",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BrownCenterTitle
            style={{
              fontSize: "30px",
              flex: 1,
              marginBlock: "10px",
              textAlign: "left",
            }}
          >
            FILA - from April 2022
          </BrownCenterTitle>
          <span style={{ flex: 1, fontWeight: 700 }}>Customer Assistance</span>
          <ul style={{ flex: 1 }}>
            <li>General customer service including cashier and consulting</li>
            <li>Bilingual customer service</li>
            <li>Replenish the products</li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
