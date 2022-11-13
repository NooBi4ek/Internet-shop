import styled from 'styled-components';

export const Search_wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.modalsearch ? '1' : '0')};
  pointer-events: ${(props) => (props.modalsearch ? 'all' : 'none')};
  transition: 0.5s;
`;

export const Search_content = styled.div`
  margin-top: 2%;
  position: relative;
  overflow-y: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  width: 20vw;
  height: 60vh;
`;

export const Search_input = styled.input`
  width: 13vw;
  height: 2vh;
  font-size: 20px;
  margin-bottom: 5px;
  margin: 0 15%;
  outline: none;
  text-align: center;
`;

export const Search_value = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 22px;
  color: #000;
`;
