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
  margin-top: 0.3em;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 27px 10px hsla(150, 100%, 66%, 0.4);
  }

  &:active {
    transform: scale(0.94) translate(0, 50%);
  }
`;

export default StyledFooter