import styled from 'styled-components';

const Smallborder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  min-height: 300px;
  float: left;
  border: 1px solid #777777;
  border-radius: 5px;
  margin: 10px 30px;
  user-select: none;
`;
const Smallborder_div = styled.div`
  margin-bottom: 30px;
`;
const Smallborder_img = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin: 50px auto;
`;
const Onephone = ({ phone }) => {
  return (
    <div>
      <Smallborder>
        <Smallborder_img src={'./img/' + phone.img} />
        <Smallborder_div>{phone.name}</Smallborder_div>
        <Smallborder_div>{phone.price * phone.count} UAH</Smallborder_div>
      </Smallborder>
    </div>
  );
};
export default Onephone;
