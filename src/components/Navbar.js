import { CartIcon } from '../icons';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../features/cart/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container' onClick={() => dispatch(show())}>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
