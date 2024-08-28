import './CartOrderDetails.css'
import { useCart } from '../../context/CartProvider'

export default function CartOrderDetails() {
    const { serOrder } = useCart()

    function emptyValue(value) {
        alert(`Insira um ${value} válido!`)
    }

    function saveUserInfo() {
        const orderName = true ? document.querySelector("#orderName").value : emptyValue('nome')
        const orderPhone = true ? document.querySelector("#orderPhone").value : emptyValue('telefone')
        const orderCpf = true ? document.querySelector("#orderCpf").value : emptyValue('CPF')
        const orderAdress = true ? document.querySelector("#orderAdress").value : emptyValue('endereço')

        if(orderName && orderPhone && orderCpf && orderAdress) {
            const order = {
                orderName: orderName,
                orderPhone: orderPhone,
                orderCpf: orderCpf,
                orderAdress: orderAdress
            }
            
            serOrder(order)           
        }        

        alert('ta e ai?')
    }
    
    
    
    return (
        <div className='CartOrderDetails'>
            <h2>Dados do comprador</h2>
            <p><strong>Nome: </strong></p>
            <input id="orderName" type="text" placeholder="nome..."></input>
            <p><strong>Telefone: </strong></p>
            <input id="orderPhone" type="text" placeholder="telefone..."></input>
            <p><strong>CPF: </strong></p>
            <input id="orderCpf" type="text" placeholder="cpf..."></input>
            <p><strong>Endereço de entrega: </strong></p>
            <input id="orderAdress" type="text" placeholder="endereço..."></input>
            <p><strong>Método de pagamento: </strong> Pix</p>
            
            <button type='button' className="CartOrderDetailsSave" onClick={ saveUserInfo }>Salvar Dados</button>   
        </div>
    )
}