import { Action } from "./counter-actions";
import { Change } from "raj";
import { exhaustiveCheck } from "ts-exhaustive-check";

export interface State {
  count: number;
}

export const init: Change<State, Action> = [{ count: 0 }];

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
