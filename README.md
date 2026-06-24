# Zod Interview Questions & Answers

## 1. What is Zod?

**Answer:**

Zod is a TypeScript-first schema validation library used to validate data at runtime and automatically generate TypeScript types.

### Example

```ts
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});
```

---

## 2. Why do we use Zod?

**Answer:**

Zod helps:

- Validate user input
- Validate API requests and responses
- Prevent runtime errors
- Generate TypeScript types automatically
- Improve code safety

### Example

```ts
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

userSchema.parse({
  name: "John",
  age: 25,
});
```

---

## 3. What is the difference between `parse()` and `safeParse()`?

**Answer:**

### parse()

Throws an error if validation fails.

```ts
userSchema.parse({
  name: "John",
  age: "25",
});
```

### safeParse()

Returns an object instead of throwing an error.

```ts
const result = userSchema.safeParse({
  name: "John",
  age: "25",
});

console.log(result.success);
```

**Output:**

```ts
false
```

---

## 4. What is `z.infer` in Zod?

**Answer:**

`z.infer` creates TypeScript types directly from a Zod schema.

### Example

```ts
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof userSchema>;
```

Generated Type:

```ts
type User = {
  name: string;
  age: number;
};
```

---

## 5. What is `refine()` used for in Zod?

**Answer:**

`refine()` is used for custom validation rules that are not available by default.

### Example

```ts
const passwordSchema = z
  .string()
  .refine(
    password => password.length >= 8,
    {
      message: "Password must be at least 8 characters",
    }
  );
```

If the password is shorter than 8 characters, validation will fail.

---



# TypeScript Interview Questions & Answers

## 1. What is TypeScript and how is it different from JavaScript?

**Answer:**

TypeScript is a superset of JavaScript that adds static typing, interfaces, enums, and compile-time error checking. TypeScript code is transpiled into JavaScript before it runs in the browser or Node.js.

---

## 2. Why should we use TypeScript?

**Answer:**

- Detects errors during development
- Improves code maintainability
- Provides better IDE support and autocomplete
- Makes refactoring easier
- Improves collaboration in large projects

---

## 3. What are the primitive data types in TypeScript?

**Answer:**

Primitive data types include:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

### Example

```ts
let name: string = "Shahriar";
let age: number = 30;
let isDeveloper: boolean = true;
```

---

## 4. How do you define an array in TypeScript?

**Answer:**

### Method 1

```ts
let numbers: number[] = [1, 2, 3];
```

### Method 2

```ts
let numbers: Array<number> = [1, 2, 3];
```

---

## 5. How do you define an object type in TypeScript?

**Answer:**

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "Shahriar",
  age: 30,
};
```

---

## 6. How do you specify parameter and return types in a function?

**Answer:**

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

The parameters and return value are explicitly typed.

---

## 7. What is an optional property in TypeScript?

**Answer:**

Optional properties use the `?` operator.

```ts
type User = {
  name: string;
  email?: string;
};
```

The `email` property may or may not exist.

---

## 8. What is a readonly property?

**Answer:**

Readonly properties cannot be modified after initialization.

```ts
type Product = {
  readonly id: number;
  title: string;
};
```

### Invalid

```ts
product.id = 10; // Error
```

---

## 9. What is the difference between Type and Interface?

**Answer:**

### Type

```ts
type User = {
  name: string;
};
```

### Interface

```ts
interface User {
  name: string;
}
```

### Key Differences

| Type | Interface |
|--------|----------|
| Supports unions | Does not support unions directly |
| More flexible | Better for object contracts |
| Cannot be merged | Can be merged |

### Example

```ts
type Status = "success" | "error";
```

---

## 10. What happens when TypeScript finds a type error?

**Answer:**

TypeScript throws a compile-time error before the code runs.

```ts
let age: number = 25;

age = "twenty five";
```

### Error

```bash
Type 'string' is not assignable to type 'number'
```

---


## 11. What is `any`?

```ts
let value: any = 10;

value = "hello";
value = true;
```

The `any` type disables TypeScript's type checking.

---

## 12. What is the difference between `any` and `unknown`?

### any

```ts
let value: any = "Hello";

value.toUpperCase();
```

### unknown

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

`unknown` is safer because type checking is required before use.

---

## 13. What is a Union Type?

```ts
let id: string | number;

id = 101;
id = "101";
```

Union types allow multiple possible types.

---

## 14. What is Type Inference?

```ts
let name = "Shahriar";
```

TypeScript automatically infers that `name` is a string.

---

## 15. What is Type Assertion?

```ts
let value: unknown = "Hello";

let length = (value as string).length;
```

Type assertion tells TypeScript to treat a value as a specific type.

---

## 16. What is the difference between `==` and `===`?

### Loose Equality

```ts
"5" == 5; // true
```

### Strict Equality

```ts
"5" === 5; // false
```

Always prefer `===`.

---

## 17.  What is an Interface Extension?

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}
```

Interfaces can inherit properties from other interfaces.

---

## 18. What is a Tuple?

```ts
let user: [string, number] = ["Shahriar", 30];
```

Tuples store fixed-length arrays with specific types.

---

## 19.  What is an Enum?

```ts
enum Role {
  Admin,
  User,
  Moderator,
}
```

Enums represent a set of named constants.

---

## 20. What are Generics?

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);
```

Generics allow reusable and type-safe code.
