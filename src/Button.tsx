import styled from "styled-components";
import { ButtonHTMLAttributes, FC, forwardRef, Ref } from "react";

const ButtonBase = styled.button`
  color: red;
`;

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <ButtonBase ref={ref} onClick={() => console.log("Test")} {...props}>
        {children}
      </ButtonBase>
    );
  }
);
