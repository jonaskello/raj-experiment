import { Change } from "raj";
import { Action } from "./hello-actions";

export interface State {
  readonly text: string;
}

export function initialState(initialText: string): State {
  return { text: initialText };
}

export function update(
  action: Action,
  state: State = initialState("")
): Change<State, Action> {
  switch (action.type) {
    case "SetText":
      return [{ text: action.text }];
    default:
      return [state];
  }
}
