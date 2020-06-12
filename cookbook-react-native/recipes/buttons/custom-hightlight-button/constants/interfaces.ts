type Key = string | number;

export type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export type NumberObject = GenericObjectInterface<number>;
