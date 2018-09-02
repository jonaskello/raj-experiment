export type Action = More | SetImageUrl;

export interface More {
  readonly type: "More";
}

export function more(): More {
  return { type: "More" };
}

export interface SetImageUrl {
  readonly type: "SetImageUrl";
  readonly url: string;
}

export function setImageUrl(url: string): SetImageUrl {
  return { type: "SetImageUrl", url };
}
