import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(217, 19%, 24%);
  width: 90%;
  margin: auto;
  border-radius: 16px;
  max-width: 345px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    max-width: 545px;
  }
`;

export default StyledContainer;
