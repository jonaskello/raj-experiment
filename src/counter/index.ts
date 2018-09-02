import { ReactProgram } from "raj-react";
import { view } from "./counter-view";
import { update, State } from "./counter-state";
import { Action } from "./counter-actions";

export const program: ReactProgram<State, Action> = {
  update,
  view
};
