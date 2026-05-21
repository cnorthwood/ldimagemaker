import React, { ChangeEvent, FunctionComponent } from "react";

const TextEditor: FunctionComponent<{
  text: string;
  foregroundColour: string;
  backgroundColour: string;
  onChange: (text: string, foregroundColour: string, backgroundColour: string) => void;
}> = ({ text, foregroundColour, backgroundColour, onChange }) => {
  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <input
          className="input"
          value={text}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            onChange(ev.currentTarget.value, foregroundColour, backgroundColour)
          }
        />
      </div>
      <div className="control">
        <div className="select">
          <select
            aria-label="Foreground Colour"
            value={foregroundColour}
            onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
              onChange(text, ev.currentTarget.value, backgroundColour);
            }}
          >
            <option value="#ff6400">Democrat Orange</option>
            <option value="#ff0075">Community Magenta</option>
            <option value="#ffffff">White</option>
            <option value="#072f5f">Liberty Navy</option>
            <option value="#4f9161">Equality Green</option>
            <option value="#faa61a">Legacy Yellow</option>
            <option value="#151721">Legacy Charcoal</option>
          </select>
        </div>
      </div>
      <div className="control">
        <div className="select">
          <select
            aria-label="Background Colour"
            value={backgroundColour}
            onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
              onChange(text, foregroundColour, ev.currentTarget.value);
            }}
          >
            <option value="#ff6400">Democrat Orange</option>
            <option value="#ff0075">Community Magenta</option>
            <option value="#ffffff">White</option>
            <option value="#072f5f">Liberty Navy</option>
            <option value="#4f9161">Equality Green</option>
            <option value="#faa61a">Legacy Yellow</option>
            <option value="#151721">Legacy Charcoal</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
