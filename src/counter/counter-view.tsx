import * as React from "react";
import { State } from "./counter-state";

export function view(state: State) {
  return <p>The count is: {state.count} </p>;
}
