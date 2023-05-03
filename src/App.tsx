import ICON_DICE from "./images/icon-dice.svg";
import DIVIDER_DESKTOP from "./images/pattern-divider-desktop.svg";
// import DIVIDER_MOBILE from './images/pattern-divider-mobile.svg';
import { useAdvice } from "./fetchHooks";
import "./App.css";

function App() {
  const { data: advice, refetch } = useAdvice();

  if (!advice) return null;

  const handleButtonClick = () => {
    refetch();
  };

  return (
    <main>
      <div className="card">
        <h1>ADVICE # {advice.id}</h1>
        <p>{`“${advice.advice}”`}</p>
        <Divider />
      </div>
      <DiceButton onClick={handleButtonClick} />
    </main>
  );
}

function Divider() {
  return <img className="divider" src={DIVIDER_DESKTOP} />;
}

interface DiceButtonProps {
  onClick: () => void;
}

function DiceButton(props: DiceButtonProps) {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="dice">
      <img src={ICON_DICE} alt="icon dice" />
    </button>
  );
}

export default App;
