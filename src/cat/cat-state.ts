import * as Actions from "./cat-actions";
import { Change } from "raj";
import { exhaustiveCheck } from "ts-exhaustive-check";
import { fetchJson } from "../fetch-json";

export interface State {
  imageUrl: string;
  loading: boolean;
}

export const init: Change<State, Actions.Action> = [
  {
    imageUrl: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    loading: false
  }
];

export function upate(
  action: Actions.Action,
  state: State
): Change<State, Actions.Action> {
  switch (action.type) {
    case "More": {
      return [
        { ...state, loading: true },
        fetchJson(
          "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat",
          json => {
            return Actions.setImageUrl(json.data.image_url);
          }
        )
      ];
    }
    case "SetImageUrl": {
      return [{ ...state, imageUrl: action.url, loading: false }];
    }
    default: {
      return exhaustiveCheck(action, true);
    }
  }
}
