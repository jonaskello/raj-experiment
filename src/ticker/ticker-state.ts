import * as Actions from "./ticker-actions";
import { Change } from "raj";
import { exhaustiveCheck } from "ts-exhaustive-check";
import { tickSubscription } from "../tick-subscription";

const { effect: startTickSub, cancel: cancelTickSub } = tickSubscription(
  count => Actions.setCount(count)
);

export interface State {
  count: number;
}

export const init: Change<State, Actions.Action> = [{ count: 0 }, startTickSub];

export function update(
  action: Actions.Action,
  state: State
): Change<State, Actions.Action> {
  switch (action.type) {
    case "Increment": {
      return [{ ...state, count: state.count + 1 }];
    }
    case "Decrement": {
      return [{ ...state, count: state.count - 1 }];
    }
    case "SetCount": {
      return [{ ...state, count: action.count }];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}

export function done() {
  console.log("ticker done");
  cancelTickSub();
}
