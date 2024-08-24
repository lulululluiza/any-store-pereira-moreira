// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAocb8NQs16Rms9o8qnjSE-zmgpMPD0dIM",
  authDomain: "projeto-react-bb3e6.firebaseapp.com",
  projectId: "projeto-react-bb3e6",
  storageBucket: "projeto-react-bb3e6.appspot.com",
  messagingSenderId: "231574637227",
  appId: "1:231574637227:web:68928289e1263059ff85ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db

const products = [
    { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', categoryId: 'blusas', stock: 2, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 2, title: 'Produto 2', description: 'Descrição 2', price: '19.99', categoryId: 'vestidos', stock: 3, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 3, title: 'Produto 3', description: 'Descrição 3', price: '35.00', categoryId: 'calcados', stock: 4, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 4, title: 'Produto 4', description: 'Descrição 4', price: '101.99', categoryId: 'calcas', stock: 5, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 5, title: 'Produto 5', description: 'Descrição 5', price: '89.99', categoryId: 'moletons', stock: 6, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 6, title: 'Produto 6', description: 'Descrição 6', price: '9.99', categoryId: 'blusas', stock: 6, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 7, title: 'Produto 7', description: 'Descrição 7', price: '23.99', categoryId: 'vestidos', stock: 16, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 8, title: 'Produto 8', description: 'Descrição 8', price: '45.50', categoryId: 'calcados', stock: 34, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 9, title: 'Produto 9', description: 'Descrição 9', price: '398.90', categoryId: 'moletons', stock: 22, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 10, title: 'Produto 10', description: 'Descrição 10', price: '307.50', categoryId: 'moletons', stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
    { id: 11, title: 'Produto 11', description: 'Descrição 11', price: '999.99', categoryId: 'vestidos', stock: 4, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
]

// only to populate the database
/*products.forEach(async(obj) => {

    const docRef = await addDoc(collection(db, "products"), obj);

    console.log("Document written with ID: ", docRef.id);

});*/

// Pegar item específico
/*const prodRef = doc(db, "products", "OCvl2qMPKwmEf6zeILLw");
console.log("prodRef: ", prodRef);

getDoc(prodRef).then((snapshot) => {
    if(snapshot.exists()) {
        console.log("snapshot: ", snapshot);
        console.log("snapshot.data: ", snapshot.data());
        console.log("produto: ", {
            ...snapshot.data(),
            id: snapshot.id
        })
    }
});*/

// Pegar coleção
/*const itemsCollection = collection(db, "products");
getDocs(itemsCollection)
    .then((snapshot) => {
        const arrayProducts = []
        console.log("snapshot: ", snapshot.docs);
        snapshot.docs.forEach((item) => {
            console.log("Item id -> ", item.id);
            console.log("Item -> ", item.data());
            arrayProducts.push({
                ...item.data(),
                id: item.id
            })
        })
        console.log(arrayProducts)
});*/

// Usando query
/*const q = query(collection(db, "products"), where("categoryId", "==", 'blusas'));
getDocs(q).then((snapshot) => {
    console.log("snapshot: ", snapshot.docs);
    if (snapshot.size === 0) 
        console.log("Vazio");
    snapshot.docs.forEach((item) => {
        console.log("Item -> ", item.data());
    })
});*/