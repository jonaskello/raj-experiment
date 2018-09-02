export type Action = Increment | Decrement;

export interface Increment {
  type: "Increment";
}

export function increment(): Increment {
  return { type: "Increment" };
}

export interface Decrement {
  type: "Decrement";
}

export function decrement(): Decrement {
  return { type: "Decrement" };
}
