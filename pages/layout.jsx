// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// styled-components
import { HeaderContainer } from "../components/styled-component/Container";

// style={{ marginBlock: 10, paddingInline: "10vw" }}
export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "90vh" }}>
      <HeaderContainer id="header-container">
        <Header />
      </HeaderContainer>
      <main
        style={{ minHeight: "100vh", marginBlock: 10, paddingInline: "10vw" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
