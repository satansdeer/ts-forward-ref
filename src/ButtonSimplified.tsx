import styled from "styled-components";
import { forwardRef } from "react";

const ButtonBase = styled.button`
  color: red;
`;

type ButtonSimplifiedProps = {
  text: string;
};

export const ButtonSimplified = forwardRef<
  HTMLButtonElement,
  ButtonSimplifiedProps
>(({ children, text, ...props }, ref) => {
  return (
    <ButtonBase ref={ref} onClick={() => console.log("Test")} {...props}>
      {children}
      {text}
    </ButtonBase>
  );
});
