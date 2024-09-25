import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Benefits from "./components/Benefits.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Collaboration from "./components/Collaboration.tsx";
import Services from "./components/Services.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
