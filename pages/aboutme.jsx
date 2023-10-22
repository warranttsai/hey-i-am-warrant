// modules
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// images
import Warrant from "../public/Warrant.jpg";
// components
import Layout from "../components/layout";
import ContactWithMe from "../components/contact-with-me/ContactWithMe";
// styled comopnents
import {
  Flex1,
  Flex2,
  FlexRowCenteredContainer,
} from "../components/styled-component/Container";
import { BlackTitle } from "../components/styled-component/Title";
import { RectangleBoxShadow } from "../components/styled-component/BoxShadow";
import { NormalContent } from "../components/styled-component/Content";

export default function AboutMe() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1000);

    // Clean up the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Introduction */}
        <section id="introduction" style={{ marginBottom: 50 }}>
          <div className="d-flex justify-content-center align-items-center">
            <BlackTitle>Introduction</BlackTitle>
          </div>

          <FlexRowCenteredContainer style={{ gap: 10 }}>
            <Flex1 className="w-100" style={{ minWidth: 300 }}>
              <RectangleBoxShadow
                id="warrant-image-container"
                className="w-100"
              >
                {!imageLoaded ? (
                  <span className="w-100">Loading...</span>
                ) : (
                  <Image
                    src={Warrant}
                    className="w-100 h-100"
                    width={500}
                    height={500}
                    layout="responsive"
                    alt="Picture of the author"
                  />
                )}
              </RectangleBoxShadow>
            </Flex1>
            <Flex2 className="w-100 h-100 d-flex justify-content-start align-items-start">
              <NormalContent className="w-100 h-100">
                Warrant is a results-driven web developer with one and a half
                years of proficiency in{" "}
                <span style={{ color: "red" }}>React JS/TS</span> development.
                Recently conferred a{" "}
                <span style={{ color: "red" }}>
                  master's degree in Information Technology (2022)
                </span>
                , demonstrating a commitment to continuous learning. Proven
                expertise in backend development utilizing{" "}
                <span style={{ color: "blue" }}>
                  Lambda serverless framework, Node.JS, Sails.JS, and Python
                  Flask
                </span>
                . Known for an insatiable appetite for acquiring new knowledge,
                paired with a reputation for responsibility, organizational
                prowess, and a willingness to tackle new challenges head-on. An
                open-minded individual receptive to diverse perspectives and
                suggestions.
              </NormalContent>
            </Flex2>
          </FlexRowCenteredContainer>
        </section>
        {/* Contact With Me */}
        <section>
          <ContactWithMe />
        </section>
      </motion.div>
    </Layout>
  );
}
