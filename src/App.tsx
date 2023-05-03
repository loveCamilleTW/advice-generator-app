import ICON_DICE from './images/icon-dice.svg';
import DIVIDER_DESKTOP from './images/pattern-divider-desktop.svg';
// import DIVIDER_MOBILE from './images/pattern-divider-mobile.svg';

function App() {
  return (
    <main>
      <div className="card">
        <h1>ADVICE # 1</h1>
        <p>
          quote
        </p>
        <Divider />
        <DiceButton />
      </div>
    </main>
  )
}

function Divider() {
  return (
    <img src={DIVIDER_DESKTOP} />
  )
}

function DiceButton() {
  return (
    <button>
      <img src={ICON_DICE} alt="icon dice" />
    </button>
  )
}

export default App
