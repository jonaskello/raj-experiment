import { Change } from "raj";
import { Action } from "./hello-actions";

export interface State {
  readonly text: string;
}

export const init: Change<State, Action> = [{ text: "initialText" }];

export function update(action: Action, state: State): Change<State, Action> {
  switch (action.type) {
    case "SetText":
      return [{ text: action.text }];
    default:
      return [state];
  }
}
