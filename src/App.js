import CartProvider from './context/CartProvider';
import Home from './pages/Home';
import db from './service/firebase'

export default function App() {
  return (

    <CartProvider>
      <Home />
    </CartProvider>
  );
}