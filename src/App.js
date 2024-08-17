import CartProvider from './context/CartProvider';
import Home from './pages/Home';

export default function App() {
  return (

    <CartProvider>
      <Home />
    </CartProvider>
  );
}