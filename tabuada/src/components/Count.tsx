import { useState } from "react";

type CountProps = {
  num: number;
  multiplier: number;
  inputRef: (el: HTMLInputElement | null) => void;
  onEnter: () => void;
};

export default function Count({
  num,
  multiplier,
  inputRef,
  onEnter,
}: CountProps) {
  const [value, setValue] = useState("");

  const trueAnswer = num * multiplier;
  const status =
    value === "" ? null : Number(value) === trueAnswer ? "Certo" : "Errado";

  return (
    <div className="row">
      <label>
        {num} * {multiplier} =
        <input
          type="number"
          value={value}
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onEnter();
            }
          }}
        />
      </label>
      <span className="status" data-status={status ?? "idle"} aria-live="polite">
        {status}
      </span>
    </div>
  );
}
