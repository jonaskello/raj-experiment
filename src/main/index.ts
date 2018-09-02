import { view } from "./main-view";
import { update, State, initialState } from "./main-state";
import { Action } from "./main-actions";
import { ReactProgram } from "raj-react";

export function makeProgram(greeting: string): ReactProgram<State, Action> {
  return {
    init: [initialState(greeting)],
    update,
    view
  };
}
