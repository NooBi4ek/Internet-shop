import { Modal, Modalcontent } from '../styled/styledmodal';
import '../App.css';
import Basket from './Basket';

const Modalbusket = ({ modal, Setmodal, orders, addcount }) => {
  return (
    <Modal modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          orders.map((el) => (
            <Basket key={el.id} orders={el} addcount={addcount} />
          ))
        ) : (
          <div>This busket is empty</div>
        )}
      </Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
