// styled-component
import { ContactContainer } from "../../components/styled-component/Container";
// components
import CommentSection from "./comment-section/CommentSection";
import ContactSection from "./contact-section/ContactSection";

function ContactWithMe() {
  return (
    <>
      <ContactContainer id="contact-section-container">
        <ContactSection />
      </ContactContainer>
      <div
        id="comment-section-container"
        className="justify-content-center align-items-center"
        style={{ minHeight: "70vh", padding: "30px 5vw" }}
      >
        <CommentSection />
      </div>
    </>
  );
}

export default ContactWithMe;
