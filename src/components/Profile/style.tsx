import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.span`
  display: flex;
  h3,
  p {
    margin: 0;
  }
  h3 {
    margin-right: 10px;
  }
  p {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  background: red;
  color: #fff;
  border: none;
  margin-top: 20px;
`;
