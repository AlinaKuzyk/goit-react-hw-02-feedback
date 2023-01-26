import styled from '@emotion/styled';

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 2px;
  background-color: #b29696cf;
  color: black;
  padding: 7px 14px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #d4b1b1cf;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
