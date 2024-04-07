import React from "react";
import { ButtonPrimary } from "./ButtonStyle";

export default function Button({ onClick, children, padding }) {
  return (
    <ButtonPrimary padding={padding} onClick={onClick}>
      {children}
    </ButtonPrimary>
  );
}
