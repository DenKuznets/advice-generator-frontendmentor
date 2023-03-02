import StyledFooter from "./styled/Footer.styled";

export default function Footer(props) {
  return (
    <StyledFooter onClick={props.onClick}>
      <img src="./images/icon-dice.svg" alt="die" />
    </StyledFooter>
  );
}