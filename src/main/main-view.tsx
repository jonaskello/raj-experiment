import * as React from "react";
import { Dispatch } from "raj";
import { State } from "./main-state";
import * as Actions from "./main-actions";
import { view as helloView } from "../hello/hello-view";
import { view as counterView } from "../counter/counter-view";

export function view(state: State, dispatch: Dispatch<Actions.Action>) {
  return (
    <div>
      <p>The greeting is: {state.greeting}</p>
      <div>
        Counter1:
        {counterView(state.counter1, a =>
          dispatch(Actions.dispatchCounter1(a))
        )}
      </div>
      <div>
        Counter2:
        {counterView(state.counter2, a =>
          dispatch(Actions.dispatchCounter2(a))
        )}
      </div>
      <div>
        Hello:
        {helloView(state.hello, a => dispatch(Actions.dispatchHello(a)))}
      </div>
    </div>
  );
}
