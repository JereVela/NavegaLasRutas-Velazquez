import { Carrito } from '../components/Carrito';
import { useCarritoContext } from '../context/CarritoContext';

const ShopPage = () => {
  const { carrito } = useCarritoContext();

  console.log(carrito);
  

  return (
    <div style={{ width:"100%" }}>
      <Carrito items={carrito}/>
    </div>
  );
};

export default ShopPage;