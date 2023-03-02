import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.9em;
  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 1.9rem;
    padding: 0 1.6em;
  }
  p {
    margin-top: 0.8em;
    margin-bottom: 0.7em;
    text-align: center;
    line-height: 1.2;
    @media (min-width: ${(props) => props.theme.desktop}) {      
      margin-bottom: 1.3em;
     }
  }
`;

export default StyledMain;
