import { view } from "./main-view";
import { update, State, init } from "./main-state";
import { Action } from "./main-actions";
import { ReactProgram } from "raj-react";

export function makeProgram(greeting: string): ReactProgram<State, Action> {
  return {
    init: init,
    update,
    view
  };
}
