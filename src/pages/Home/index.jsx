//import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { useCart } from '../../context/CartProvider';
import Router from '../../router'
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
    const { cart } = useCart()
    
    return(
        <div>
            <BrowserRouter>
                <NavBar />  
                <Router />
            </BrowserRouter>
        </div>
    )
}