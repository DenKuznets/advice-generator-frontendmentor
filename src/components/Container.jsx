import StyledContainer from "./styled/Container.styled";

export default function Container(props) {
  return <StyledContainer>{ props.children }</StyledContainer>
}