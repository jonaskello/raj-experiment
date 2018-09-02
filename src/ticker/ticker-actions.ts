export type Action = Increment | Decrement | SetCount;

export interface Increment {
  readonly type: "Increment";
}

export function increment(): Increment {
  return { type: "Increment" };
}

export interface Decrement {
  readonly type: "Decrement";
}

export function decrement(): Decrement {
  return { type: "Decrement" };
}

export interface SetCount {
  readonly type: "SetCount";
  readonly count: number;
}

export function setCount(count: number): SetCount {
  return { type: "SetCount", count };
}
