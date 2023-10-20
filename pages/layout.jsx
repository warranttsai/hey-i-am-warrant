// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// styled-components
import { HeaderContainer } from "../components/styled-component/Container";

export default function Layout({ children }) {
  return (
    <div className="w-100 h-100">
      <HeaderContainer id="header-container">
        <Header />
      </HeaderContainer>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
