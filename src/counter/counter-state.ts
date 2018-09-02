import { Action } from "./counter-actions";
import { Change } from "raj";

export interface State {
  count: number;
}

export function update(action: Action, state: State): Change<State, Action> {
  return [state];
}
