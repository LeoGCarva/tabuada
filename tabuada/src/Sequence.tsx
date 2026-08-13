import { useRef } from "react";
import Container, { MULTIPLIERS } from "./components/Container";

const FIRST_TABLE = 2;
const LAST_TABLE = 12;
const TABLES = LAST_TABLE - FIRST_TABLE + 1;

export default function Sequence() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  function registerInput(position: number, el: HTMLInputElement | null) {
    inputs.current[position] = el;
  }

  function focusInput(position: number) {
    inputs.current[position]?.focus();
  }

  return (
    <div className="wrapper">
      <div>
        <p>Timer</p>
        <input type="datetime" defaultValue={'00:00'} />
      </div>

      {Array.from({ length: TABLES }, (_, i) => (
        <Container
          key={i}
          num={FIRST_TABLE + i}
          firstPosition={i * MULTIPLIERS}
          registerInput={registerInput}
          focusInput={focusInput}
        />
      ))}
    </div>
  );
}
