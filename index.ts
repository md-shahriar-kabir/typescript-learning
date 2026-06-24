// Task for 24 June 26

import z = require("zod");

const formData = {
  name: "adminNaim",
  age: 20,
  email: "naimsorker6@gmail.com",
  phone: "+8801712345678",
  password: "Admin@123",
  website: "https://naimsorker.com",
  salary: 50000,
  skills: ["TypeScript", "Node.js"],
};

const UserSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .refine(
      (value) => value.includes("admin"),
      {
        message: "Name must contain 'admin'",
      }
    ),

  age: z
    .number()
    .min(18, "Age must be at least 18")
    .max(60, "Age cannot exceed 60"),

  email: z
    .string()
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid email address"
    ),

  phone: z
    .string()
    .regex(
      /^(\+8801|01)[3-9]\d{8}$/,
      "Invalid Bangladesh phone number"
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number and special character"
    ),

  website: z
    .string()
    .url("Invalid website URL"),

  salary: z
    .number()
    .positive("Salary must be positive"),

  skills: z
    .array(z.string())
    .min(1, "At least one skill is required"),
});

const result = UserSchema.safeParse(formData);

if (!result.success) {
  console.log("Validation Failed");
  console.log(result.error.format());
} else {
  console.log("Validation Successful");
  console.log(result.data);
}





// Task for 23 June 26
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