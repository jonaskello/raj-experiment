import * as Actions from "./cat-actions";
import { Change } from "raj";
import { exhaustiveCheck } from "ts-exhaustive-check";

export interface State {
  imageUrl: string;
}

export function initialState() {
  return { imageUrl: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" };
}

export function upate(
  action: Actions.Action,
  state: State
): Change<State, Actions.Action> {
  switch (action.type) {
    case "More": {
      return [state];
    }
    case "Dummy": {
      return [state];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}
