import { view } from "./hello-view";
import { update, State, initialState } from "./hello-state";
import { Action } from "./hello-actions";
import { ReactProgram } from "raj-react";

export const program: ReactProgram<State, Action> = {
  view,
  update
};

// export function makeProgram(initialText: string): ReactProgram<State, Action> {
//   return {
//     init: [initialState(initialText)],
//     update,
//     view
//   };
// }
