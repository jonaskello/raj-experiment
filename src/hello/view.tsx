import * as React from "react";
import { State } from "./state";
import { Dispatch } from "raj";
import * as Actions from "./actions";

export function view(
  model: State,
  dispatch: Dispatch<Actions.Action>
): JSX.Element {
  return (
    <p>
      <button onClick={() => dispatch(Actions.setText("Clicked!"))}>
        Click me
      </button>
      {model.text}
    </p>
  );
}
