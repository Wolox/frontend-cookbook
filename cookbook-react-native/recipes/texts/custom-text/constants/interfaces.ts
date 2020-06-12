type Key = string | number;

type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export type StringObject = GenericObjectInterface<string>;

export type NumberObject = GenericObjectInterface<number>;
