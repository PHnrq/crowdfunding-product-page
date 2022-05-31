import { AboutSection } from "./components/AboutSection";
import { CtaCard } from "./components/CtaCard";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { SalesInfo } from "./components/SalesInfo";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <CtaCard />
        <SalesInfo />
        <AboutSection />
      </main>
      <Modal />
    </>
  );
}