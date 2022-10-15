import styled from 'styled-components';
import '../App.css';
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modalcontent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
const Modalbusket = ({ modal, Setmodal }) => {
  return (
    <Modal
      className={modal ? 'active' : 'notactive'}
      onClick={() => Setmodal(false)}
    >
      <Modalcontent onClick={(e) => e.stopPropagation()}>1</Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
