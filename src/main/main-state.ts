import { Action } from "./main-actions";
import * as CounterState from "../counter/counter-state";
import * as HelloState from "../hello/hello-state";
import { exhaustiveCheck } from "ts-exhaustive-check";
import { Change } from "raj";

export interface State {
  readonly greeting: string;
  readonly hello: HelloState.State;
  readonly counter1: CounterState.State;
  readonly counter2: CounterState.State;
}

export function initialState(greeting: string): State {
  return {
    greeting: greeting,
    hello: HelloState.initialState(greeting),
    counter1: CounterState.initialState(0),
    counter2: CounterState.initialState(10)
  };
}

export function update(
  action: Action,
  state: State = initialState("")
): Change<State, Action> {
  switch (action.type) {
    case "DispatchHello": {
      const [newHelloState] = HelloState.update(action.action, state.hello);
      return [{ ...state, hello: newHelloState }];
    }
    case "DispatchCounter1": {
      const [newCounterState] = CounterState.update(
        action.action,
        state.counter1
      );
      return [
        {
          ...state,
          counter1: newCounterState
        }
      ];
    }
    case "DispatchCounter2": {
      const [newCounterState] = CounterState.update(
        action.action,
        state.counter2
      );
      return [
        {
          ...state,
          counter2: newCounterState
        }
      ];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}
