import * as React from "react";
import { Dispatch } from "raj";
import { State } from "./counter-state";
import * as Actions from "./counter-actions";

export function view(state: State, dispatch: Dispatch<Actions.Action>) {
  return (
    <span>
      The count is: {state.count}{" "}
      <button onClick={() => dispatch(Actions.decrement())}>-</button>
      <button onClick={() => dispatch(Actions.increment())}>+</button>
    </span>
  );
}
