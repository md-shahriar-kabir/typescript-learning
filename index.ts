// primitive data types

let name: string = "Shahriar";
let age: number = 30;
let isDeveloper: boolean = true;

// array in TypeScript
let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];


// object type in TypeScript

let user: {
  name: string;
  age: number;
} = {
  name: "Shahriar",
  age: 30,
};

// parameter and return types in a function

function add(a: number, b: number): number {
  return a + b;
}


// optional property in TypeScript

type User = {
  name: string;
  email?: string;
};

// readonly property

type Product = {
  readonly id: number;
  title: string;
};

// Type and Interface

type User3 = {
  name: string;
};

interface User4 {
  name: string;
}

// any

let value: any = 10;

value = "hello";
value = true;

// Generics

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);