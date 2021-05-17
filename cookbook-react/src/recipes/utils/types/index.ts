// Useful basic types
export type Nullable<T> = T | null;

// Id/Item/Option types
export type Id = string | number;

export interface ItemType<IdType extends Id> {
  id: IdType;
}
