import styled from "styled-components";

export const SocialLoginHeader = styled.legend`
  font: 1.5em/0 "Averia Serif Libre";
  margin: 0 auto;
  padding: 0 1em;
`;

export const SocialLoginDiv = styled.fieldset`
  border-top: 2px solid #a9a9a9;
  border-bottom: 2px solid #a9a9a9;
  opacity: 1;

  width: 430px;
  margin: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLoginIcon = styled.img`
  width: 80px;
  height: 80px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 14%;
  margin: 8% 5%;
`;

export default SocialLoginDiv;
