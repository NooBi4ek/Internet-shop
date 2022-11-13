import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonBusket,
  Button_filter,
  Button_red,
  Input_filter,
  SearchButton,
} from '../../../styled/Phone/AllPhone/styledallphone';
import Onephone from '../OnePhone/Onephone';

const Allphone = ({ Setmodal, Setmodalsearch }) => {
  const [filterStart, setfilterStart] = useState('');
  const [filterEnd, setfilterEnd] = useState('');
  const [filter_phone, Setfilter_phone] = useState([]);
  const phone = useSelector((state) => state.shop.phones);
  const filternone = () => {
    Setfilter_phone(phone);
  };
  useEffect(() => {
    filternone();
  }, []);
  const filtered = () => {
    Setfilter_phone(
      phone.filter((el) =>
        el.price >= filterStart && el.price <= filterEnd ? el : null,
      ),
    );
  };
  return (
    <div>
      <Button_red onClick={() => Setmodalsearch(true)}>Open search</Button_red>
      <ButtonBusket onClick={() => Setmodal(true)}>Open basket</ButtonBusket>
      <Input_filter
        placeholder="1 value"
        value={filterStart}
        onChange={(e) => setfilterStart(e.target.value)}
      />
      <Input_filter
        placeholder="2 value"
        value={filterEnd}
        onChange={(e) => setfilterEnd(e.target.value)}
      />
      <Button_red onClick={() => filtered()}>Filter</Button_red>
      {filter_phone.map((el) => (
        <div key={el.id}>
          <Onephone phone={el} id={el.id} />
        </div>
      ))}
    </div>
  );
};
export default Allphone;
