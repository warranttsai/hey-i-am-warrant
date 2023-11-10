// module
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
// styled-components
import { BlackTitle } from "../components/styled-component/Title";
import {
  Flex1,
  FlexColumnCenteredContainer,
} from "../components/styled-component/Container";
// components
import Cleanstormwater from "../components/working-experience-component/CleanStormwater";
import Fila from "../components/working-experience-component/Fila";
import Funkdelics from "../components/working-experience-component/Funkdelics";
import Blackball from "../components/working-experience-component/Blackball";
import PoppingDanceInstructor from "../components/working-experience-component/PoppingDanceInstructor";
import Layout from "../components/layout";

export default function WorkingExperience() {
  return (
    <Layout>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ padding: "2vh 10vw" }}>
            <BlackTitle>Software Engineer Experience</BlackTitle>
            <Cleanstormwater />
          </div>
        </motion.div>
      </div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
          marginBlock: 10,
        }}
      />
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ padding: "2vh 10vw" }}>
            <BlackTitle>The Other Experience</BlackTitle>
            <FlexColumnCenteredContainer style={{ gap: "10px" }}>
              <Flex1 className="w-100">
                <Fila />
              </Flex1>
              <Flex1 className="w-100">
                <Funkdelics />
              </Flex1>
              <Flex1 className="w-100">
                <Blackball />
              </Flex1>
              <Flex1 className="w-100">
                <PoppingDanceInstructor />
              </Flex1>
            </FlexColumnCenteredContainer>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
