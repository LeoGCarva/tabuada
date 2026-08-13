import Count from "./Count";

export const MULTIPLIERS = 10;

type ContainerProps = {
  num: number;
  firstPosition: number;
  registerInput: (position: number, el: HTMLInputElement | null) => void;
  focusInput: (position: number) => void;
};

export default function Container({
  num,
  firstPosition,
  registerInput,
  focusInput,
}: ContainerProps) {
  return (
    <div className="container">
      {Array.from({ length: MULTIPLIERS }, (_, i) => {
        const position = firstPosition + i;

        return (
          <Count
            key={i}
            num={num}
            multiplier={i + 1}
            inputRef={(el) => registerInput(position, el)}
            onEnter={() => focusInput(position + 1)}
          />
        );
      })}
    </div>
  );
}
