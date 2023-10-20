// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// styled-components
import { BrownCenterTitle } from "../styled-component/Title";

export default function Funkdelics() {
  return (
    <>
      <Card
        id="funkdelic-container"
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
            Funkdelics - from Jan 2022
          </BrownCenterTitle>
          <span style={{ flex: 1, fontWeight: 700 }}>Executive Secretary</span>
          <span style={{ flex: 1 }}>
            Funkdelic is the dancing club in Melbourne RMIT University. The club
            facilitates dance events, training and cultural exchange.
          </span>
          <ul style={{ flex: 1 }}>
            <li>
              Organising dancing workshop (we had more than 15 people
              participated in the locking dance workshop on April 2023!)
            </li>
            <li>
              Helping welcome party (We got more than 40 students participated
              in this party!)e
            </li>
            <li>Helping organise dancing battles (The First Cycle 2023)</li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
