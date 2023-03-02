import StyledMain from "./styled/Main.styled";

export default function Main(props) {
  console.log(props);
  

  return (
    <StyledMain>
      <p>"{props.adviceText}"</p>
      <picture>
        <source
          media={`(min-width: ${props.theme.desktop})`}
          srcSet="./images/pattern-divider-desktop.svg"
        />
        <img src="./images/pattern-divider-mobile.svg" alt="" />
      </picture>
    </StyledMain>
  );
}