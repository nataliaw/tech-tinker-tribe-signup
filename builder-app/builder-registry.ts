"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MyComponent from "./components/signup";
import SignupForm from "./components/SignupForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(SignupForm, {
  name: "SignupForm",
});

Builder.registerComponent(MyComponent, {
  name: "Signup",
});
