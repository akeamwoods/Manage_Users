import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
  overflow: hidden;
  h1 {
    margin: 0 0 5px 0;
  }
`;

export const ControlSpan = styled.span`
  display: flex;
  button {
    padding: 5px 10px;
  }
`;

export const ResultsText = styled.p`
  color: grey;
  margin-bottom: 0;
`;

export const Button = styled.button`
  background: #55b6a8;
  color: #fff;
  padding: 15px 10px;
  border: none;
`;
