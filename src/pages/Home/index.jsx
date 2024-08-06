//import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Router from '../../router'
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
    return(
        <div>            
            <BrowserRouter>
                <NavBar />  
                <Router />
            </BrowserRouter>
        </div>
    )
}