import { useState } from 'react';
import {
  Smallborder,
  Smallborder_img,
  Smallborder_div,
  Smallborder_button,
} from '../styled/styledOnephone';

const Onephone = ({ phone, addToOrder, addItem }) => {
  return (
    <div>
      <Smallborder>
        <Smallborder_img src={'./img/' + phone.img} />
        <Smallborder_div>{phone.name}</Smallborder_div>
        <Smallborder_div>{phone.price} UAH</Smallborder_div>
        <Smallborder_button
          onClick={() => {
            addToOrder(phone);
            addItem(phone.id);
          }}
          click={phone.click}
        >
          {phone.click ? 'In the box' : 'Buy'}
        </Smallborder_button>
      </Smallborder>
    </div>
  );
};
export default Onephone;
