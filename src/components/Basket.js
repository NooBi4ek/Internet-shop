import {
  Basket_button,
  Basket_div,
  Basket_img,
  Basket_wrapper,
} from '../styled/styledBasket';

const Basket = ({ orders, addcount }) => {
  return (
    <Basket_wrapper>
      <Basket_img src={'./img/' + orders.img} />
      <Basket_div>
        <div>{orders.name}</div>
        <div>{orders.price * orders.count} UAH</div>
        <div>{orders.count}</div>
        <Basket_button onClick={() => addcount(orders.id)}>
          Add count
        </Basket_button>
      </Basket_div>
    </Basket_wrapper>
  );
};
export default Basket;
