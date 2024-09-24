import ButtonGradient from "./assets/svg/ButtonGradient.tsx";

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
