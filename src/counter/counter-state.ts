import { Action } from "./counter-actions";
import { Change } from "raj";

export interface State {
  count: number;
}

export function initialState(count: number): State {
  return { count };
}

export function update(action: Action, state: State): Change<State, Action> {
  return [state];
}
