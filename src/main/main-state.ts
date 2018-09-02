import { Action, dispatchCat } from "./main-actions";
import * as CounterState from "../counter/counter-state";
import * as HelloState from "../hello/hello-state";
import * as CatState from "../cat/cat-state";
import { exhaustiveCheck } from "ts-exhaustive-check";
import { Change } from "raj";
import { mapEffect } from "raj-compose";

export interface State {
  readonly greeting: string;
  readonly hello: HelloState.State;
  readonly counter1: CounterState.State;
  readonly counter2: CounterState.State;
  readonly cat: CatState.State;
}

export function initialState(greeting: string): State {
  return {
    greeting: greeting,
    hello: HelloState.initialState(greeting),
    counter1: CounterState.initialState(0),
    counter2: CounterState.initialState(10),
    cat: CatState.initialState()
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
    case "DispatchCat": {
      const [newCatState, catEffect] = CatState.upate(action.action, state.cat);
      return [
        { ...state, cat: newCatState },
        mapEffect(catEffect!, dispatchCat)
      ];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}
