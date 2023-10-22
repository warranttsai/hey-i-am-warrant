// components
import Header from "./Header";
import Footer from "./Footer";
// styled-components
import { HeaderContainer } from "./styled-component/Container";

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
