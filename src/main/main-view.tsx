import * as React from "react";
import { Dispatch } from "raj";
import { State } from "./main-state";
import * as Actions from "./main-actions";
import { program as helloProgram } from "../hello";

export function view(state: State, dispatch: Dispatch<Actions.Action>) {
  return (
    <div>
      <p>The greeting is: {state.greeting}</p>
      <div>Counter1: {state.counter1.count}</div>
      <div>Counter2: {state.counter2.count}</div>
      <div>
        Hello:
        {helloProgram.view(state.hello, a =>
          dispatch(Actions.dispatchHello(a))
        )}
      </div>
    </div>
  );
}
