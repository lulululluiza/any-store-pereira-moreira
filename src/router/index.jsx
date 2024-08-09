import { Routes, Route } from "react-router-dom"
import ItemListContainer from "../pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer"


export default function Router() {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
        </div>
    )
}