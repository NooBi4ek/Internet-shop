import { useState } from 'react';
import { phones, order } from './db';
import Allphone from './components/Allphone';
import Modalbusket from './components/Modalbusket';

const App = () => {
  const [phone, Setphones] = useState(phones);
  const [modal, Setmodal] = useState(false);
  const [orders, Setorders] = useState(order);
  const addToOrder = (phone) => {
    let isArr = false;
    orders.forEach((el) => {
      if (el.id === phone.id) {
        isArr = true;
      }
    });
    if (!isArr) {
      Setorders([...orders, phone]);
      console.log(orders);
    }
  };
  //Добавление количества товара
  const addcount = (id) => {
    const countplus = phone.map((el) =>
      el.id === id ? { ...el, count: el.count + 1 } : el,
    );
    Setphones(countplus);
  };

  return (
    <div>
      <Allphone phone={phone} Setmodal={Setmodal} addToOrder={addToOrder} />
      <Modalbusket
        modal={modal}
        Setmodal={Setmodal}
        orders={orders}
        addcount={addcount}
      />
    </div>
  );
};
export default App;
