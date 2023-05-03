import ICON_DICE from "./images/icon-dice.svg";
import DIVIDER_DESKTOP from "./images/pattern-divider-desktop.svg";
// import DIVIDER_MOBILE from './images/pattern-divider-mobile.svg';
import { useAdvice } from "./fetchHooks";
import "./App.css";

function App() {
  const { data: advice } = useAdvice();

  if (!advice) return null;

  return (
    <main>
      <div className="card">
        <h1>ADVICE # {advice.id}</h1>
        <p>{`“${advice.advice}”`}</p>
        <Divider />
      </div>
      <DiceButton />
    </main>
  );
}

function Divider() {
  return <img src={DIVIDER_DESKTOP} />;
}

function DiceButton() {
  return (
    <button className="dice">
      <img src={ICON_DICE} alt="icon dice" />
    </button>
  );
}

export default App;
