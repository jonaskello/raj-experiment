import * as React from "react";
import { State } from "./hello-state";
import { Dispatch } from "raj";
import * as Actions from "./hello-actions";

export function view(
  model: State,
  dispatch: Dispatch<Actions.Action>
): JSX.Element {
  return (
    <span>
      <button onClick={() => dispatch(Actions.setText("Clicked!"))}>
        Click me
      </button>
      {model.text}
    </span>
  );
}
