export type Action = Increment | Decrement;

export interface Increment {
  type: "Increment";
}

export function increment() {
  return { type: "Increment" };
}

export interface Decrement {
  type: "Decrement";
}

export function decrement() {
  return { type: "Decrement" };
}
