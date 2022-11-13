import styled from 'styled-components';
export const ButtonBusket = styled.button`
  float: right;
  margin: 20px 10px;
  padding: 5px 20px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  transition: 0.5s linear;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;
export const Onephone_wrapper = styled.div`
  margin-left: 100px;
`;
export const Input_filter = styled.input`
  outline: none;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid #000;
  transition: 0.3s;
  margin-right: 50px;
  &:focus {
    border-bottom: 1px solid red;
  }
  ::-webkit-input-placeholder {
    color: #000;
    font-weight: 500;
  }
`;
export const Button_red = styled.button`
  margin: 20px 10px;
  padding: 5px 20px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  transition: 0.5s linear;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;
