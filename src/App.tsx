import { AboutSection } from "./components/AboutSection";
import { CtaCard } from "./components/CtaCard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <CtaCard />
        <AboutSection />
      </main>
    </>
  );
}