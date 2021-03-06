import * as React from "react";
import { Dispatch } from "raj";
import * as Actions from "./cat-actions";
import { State } from "./cat-state";

export function view(state: State, dispatch: Dispatch<Actions.Action>) {
  return (
    <p>
      <img src={state.imageUrl} width="200" height="200" />
      {state.loading ? (
        "Loading..."
      ) : (
        <button onClick={() => dispatch(Actions.more())}>More</button>
      )}
    </p>
  );
}
