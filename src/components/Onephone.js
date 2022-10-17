import {
  Smallborder,
  Smallborder_img,
  Smallborder_div,
  Smallborder_button,
} from '../styled/styledOnephone';

const Onephone = ({ phone, addToOrder }) => {
  return (
    <div>
      <Smallborder>
        <Smallborder_img src={'./img/' + phone.img} />
        <Smallborder_div>{phone.name}</Smallborder_div>
        <Smallborder_div>{phone.price * phone.count} UAH</Smallborder_div>
        <Smallborder_button
          onClick={() => {
            addToOrder(phone);
            console.log(phone);
          }}
        >
          Buy
        </Smallborder_button>
      </Smallborder>
    </div>
  );
};
export default Onephone;
