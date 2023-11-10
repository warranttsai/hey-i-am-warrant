// modules
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// styled-components
import { BrownCenterTitle } from "../styled-component/Title";

export default function Blackball() {
  return (
    <>
      <Card
        id="blackball-container"
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
            Blackball Chinatown - from January 2021 to May 2022
          </BrownCenterTitle>
          <span style={{ flex: 1, fontWeight: 700 }}>
            Food and beverage attendant
          </span>
          <span style={{ flex: 1 }}>
            Since my arrival in Melbourne, Australia, Blackball has been my
            initial workplace experience. It presented a fast-paced,
            teamwork-focused environment that demanded adept time management
            skills. During my tenure at the milk tea shop, I acquired the
            ability to motivate myself and effectively incorporate necessary
            periods of relaxation amidst my responsibilities.
          </span>
          <ul style={{ flex: 1 }}>
            <li>Customer Service</li>
            <li>Opening/ Closing Shift</li>
            <li>Kitchen Hand/ Dish Hand</li>
            <li>Stock-taking</li>
            <li>
              Experienced in fast-paced environment in public holiday and long
              shift of open to close shift.
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
