import { StyledButton } from "./Button.styled";

const Button = ({ onClick, children, loading }) => {  
  return (
    <StyledButton onClick={onClick} disabled={loading}>
      {children}
    </StyledButton>
  );
}

export default Button;
