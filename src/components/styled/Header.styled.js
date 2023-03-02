import styled from "styled-components";

const StyledHeader = styled.header`
  color: hsl(150, 100%, 66%);
  font-size: 0.75rem;
  margin-top: 3.3em;
  letter-spacing: 3px;
  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 0.85rem;
    letter-spacing: 4px;
  }
`;

export default StyledHeader