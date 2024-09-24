import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <>
      <h1 className="font-bold underline text-xl">Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
