const obj1 = {
  a: "hello",
  b: true,
  c: ["1"],
};

type A = typeof obj1;

interface B {
  name: string;
  age: number;
}
/**
 * Pick
 * usage: Select some properties from an object to form a new object
 */
const pickA: Pick<A, "a" | "b"> = {
  a: "pick",
  b: false,
};

//
/**
 * Record
 * usage: declare a object with specific key and value type
 */
const recordA: Record<Exclude<keyof A, "b">, B> = {
  a: { name: "a", age: 12 },
  c: { name: "a", age: 12 },
};

/**
 * Exclude
 * usage: exclude some types from a union type
 */
type UnionTypes = string | number | boolean;

const excludeExample: Exclude<UnionTypes, string> = false;

/**
 * Omit
 * usage: exclude some properties from a type
 */
const omitA: Omit<A, "a"> = {
  b: false,
  c: ["2"],
};

// Return Type
type Helper = (a: number, b: string) => string;

type ReturnValue = ReturnType<Helper>;

// Parameter Type
type Parameter = Parameters<Helper>;
const parameter: Parameter = [123, "123"];

interface Person {
  name: string;
  age: number;
  phone?: number;
}
// Required
type RequiredPersonInfo = Required<Person>;
