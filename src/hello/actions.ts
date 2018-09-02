export type Action = SetText | { type: "Dummy" };

export interface SetText {
  type: "SetText";
  text: string;
}

export function setText(text: string): SetText {
  return { type: "SetText", text };
}
