import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const cart = useContext(CartContext);
  const { isCartOpen, setIsCartOpen, cartCount } = cart;
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopIcon as={ShoppingIcon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
