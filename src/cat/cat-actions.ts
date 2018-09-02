export type Action = More | { type: "Dummy" };

export interface More {
  type: "More";
}

export function more(): More {
  return { type: "More" };
}
