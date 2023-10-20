// modules
import { Divider } from "@mui/material";
// styled-components
import {
  FlexColumnCenteredContainer,
  LabSection,
} from "../components/styled-component/Container";
// components
import {
  DrawImageForFrontEndDesign,
  EncapsulateYourStyleSheet,
} from "../components/software-engineer-note/FrontEndDesign";
import { ObjectOrientation } from "../components/software-engineer-note/ObjectOrientation";
import {
  HowToEnableCORS,
  AddingCorsHeaderToYourApiResponseHeader,
  EnableSES,
} from "../components/software-engineer-note/AwsKnowledges";

export default function MyCodingBible() {
  return (
    <FlexColumnCenteredContainer style={{ paddingInline: "20vw" }}>
      {/* Header */}
      <div className="text-left" style={{ color: "grey" }}>
        <span>
          This section is my note for software engineer experience. Creating a
          simple documentation here as my engineering bible.
          <p style={{ color: "red" }}>
            Note: These are all from my understanding. It might be slightly
            different from general definition.{" "}
          </p>
        </span>
      </div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      <LabSection>
        <DrawImageForFrontEndDesign />
      </LabSection>
      <LabSection>
        <EncapsulateYourStyleSheet />
      </LabSection>
      <LabSection>
        <ObjectOrientation />
      </LabSection>
      <LabSection>
        <HowToEnableCORS />
      </LabSection>
      <LabSection>
        <AddingCorsHeaderToYourApiResponseHeader />
      </LabSection>
      <LabSection>
        <EnableSES />
      </LabSection>
    </FlexColumnCenteredContainer>
  );
}
