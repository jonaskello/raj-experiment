import * as Actions from "./main-actions";
import * as CounterState from "../counter/counter-state";
import * as HelloState from "../hello/hello-state";
import * as CatState from "../cat/cat-state";
import * as TickerState from "../ticker/ticker-state";
import { exhaustiveCheck } from "ts-exhaustive-check";
import { Change } from "raj";
import { mapEffect } from "raj-compose";

export interface State {
  readonly greeting: string;
  readonly hello: HelloState.State;
  readonly counter1: CounterState.State;
  readonly counter2: CounterState.State;
  readonly cat: CatState.State;
  readonly ticker: TickerState.State;
}

const [counterState, counterEffect] = CounterState.init;
// const init = [
//   { counterState },
//   mapEffect(counterEffect, Actions.dispatchCounter1)
// ];

const [catState, catEffect] = CatState.init;
const [helloState, helloEffect] = HelloState.init;
const [tickerState, tickerEffect] = TickerState.init;

export const init: Change<State, Actions.Action> = [
  {
    greeting: "greeting",
    hello: helloState,
    counter1: counterState,
    counter2: counterState,
    cat: catState,
    ticker: tickerState
  }
];

export function update(
  action: Actions.Action,
  state: State
): Change<State, Actions.Action> {
  switch (action.type) {
    case "DispatchHello": {
      const [helloState] = HelloState.update(action.action, state.hello);
      return [{ ...state, hello: helloState }];
    }
    case "DispatchCounter1": {
      const [counterState] = CounterState.update(action.action, state.counter1);
      return [
        {
          ...state,
          counter1: counterState
        }
      ];
    }
    case "DispatchCounter2": {
      const [counterState] = CounterState.update(action.action, state.counter2);
      return [
        {
          ...state,
          counter2: counterState
        }
      ];
    }
    case "DispatchCat": {
      const [catState, catEffect] = CatState.upate(action.action, state.cat);
      return [
        { ...state, cat: catState },
        mapEffect(catEffect, Actions.dispatchCat)
      ];
    }
    case "DispatchTicker": {
      const [tickerState, tickerEffect] = TickerState.update(
        action.action,
        state.ticker
      );
      return [
        { ...state, ticker: tickerState },
        mapEffect(tickerEffect, Actions.dispatchTicker)
      ];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}

export function done() {}
