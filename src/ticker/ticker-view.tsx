import * as React from "react";
import { Dispatch } from "raj";
import { State } from "./ticker-state";
import * as Actions from "./ticker-actions";

export function view(state: State, dispatch: Dispatch<Actions.Action>) {
  return <p>Auto ticking: The count is: {state.count} </p>;
}
