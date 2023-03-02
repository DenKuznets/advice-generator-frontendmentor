import StyledHeader from "./styled/Header.styled";

export default function Header(props) {
  return (
    <StyledHeader>
      <span>ADVICE #</span>
      {props.adviceId}
    </StyledHeader>
  );
}
