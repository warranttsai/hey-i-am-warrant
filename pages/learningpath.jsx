// modules
import { motion } from "framer-motion";
import { Box } from "@mui/material";
// styled-components
import { ArrowComponent } from "../components/ArrowComponent";
import { BlackTitle } from "../components/styled-component/Title";
// components
import Layout from "../components/layout";
import SE2016 from "../components/learning-path-components/software-engineering/SE2016";
import SE2017 from "../components/learning-path-components/software-engineering/SE2017";
import SE2018 from "../components/learning-path-components/software-engineering/SE2018";
import SE2019 from "../components/learning-path-components/software-engineering/SE2019";
import SE2020 from "../components/learning-path-components/software-engineering/SE2020";
import SE2021 from "../components/learning-path-components/software-engineering/SE2021";
import SE2022 from "../components/learning-path-components/software-engineering/SE2022";
import SE2023 from "../components/learning-path-components/software-engineering/SE2023";

export default function LearningPath() {
  return (
    <Layout>
      <Box data-testid="software-engineering" style={{ minHeight: "40vh" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <>
            <BlackTitle>👨‍💻 Software Engineering/Computer Science</BlackTitle>
            <div
              className="hide-scroll-bar"
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "scroll",
                overflowX: "scroll",
                paddingInline: 200,
                maxWidth: "100%",
              }}
            >
              <SE2016 />
              <ArrowComponent />
              <SE2017 />
              <ArrowComponent />
              <SE2018 />
              <ArrowComponent />
              <SE2019 />
              <ArrowComponent />
              <SE2020 />
              <ArrowComponent />
              <SE2021 />
              <ArrowComponent />
              <SE2022 />
              <ArrowComponent />
              <SE2023 />
            </div>
          </>
        </motion.div>
      </Box>
      <br />
      {/* <div
        data-testid="street-dancing"
        style={{ background: "#D3D3D3", minHeight: "40vh" }}
      >
        <BlackTitle style={{ marginTop: "100px", paddingTop: "30px" }}>
          🕺 Street Dancing
        </BlackTitle>
      </div> */}
    </Layout>
  );
}
