import { view } from "./main-view";
import { update, State, init, done } from "./main-state";
import { Action } from "./main-actions";
import { ReactProgram } from "raj-react";

export function makeProgram(_greeting: string): ReactProgram<State, Action> {
  return {
    init,
    update,
    view,
    done
  };
}
