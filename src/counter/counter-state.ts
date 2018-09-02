import { Action } from "./counter-actions";
import { Change } from "raj";
import { exhaustiveCheck } from "ts-exhaustive-check";

export interface State {
  count: number;
}

export function initialState(count: number): State {
  return { count };
}

export function update(action: Action, state: State): Change<State, Action> {
  switch (action.type) {
    case "Increment": {
      return [{ ...state, count: state.count + 1 }];
    }
    case "Decrement": {
      return [{ ...state, count: state.count - 1 }];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}
