type Key = string | number;

type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export type NumberObject = GenericObjectInterface<number>;
