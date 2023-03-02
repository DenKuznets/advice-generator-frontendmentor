import styled from "styled-components";

const circleSize = '65px';

const StyledFooter = styled.footer`
  height: ${circleSize};
  width: ${circleSize};
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 50%);
`;

export default StyledFooter