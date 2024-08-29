import './CartOrderDetails.css'
import { useCart } from '../../context/CartProvider'

export default function CartOrderDetails() {
    const { setOrder } = useCart()


    function saveUserInfo() {
        const orderName = document.querySelector("#orderName")
        const orderPhone = document.querySelector("#orderPhone")
        const orderCpf = document.querySelector("#orderCpf")
        const orderAdress = document.querySelector("#orderAdress")

        const form = document.querySelector("#form")
        form.addEventListener('submit', (event) => {
            event.preventDefault()
        })

        let orderDetails = {}

        if(orderName.value && orderPhone.value && orderCpf.value && orderAdress.value) {
            orderDetails = {
                buyer: {               
                    orderName: orderName.value,
                    orderPhone: orderPhone.value,
                    orderCpf: orderCpf.value,
                    orderAdress: orderAdress.value
                }
            }

            setOrder(orderDetails)            
        } else {
            alert('Verifique se todos os dados do comprador foram preenchidos!')
        }
    }
    
    return (
        <div className='CartOrderDetails'>
            <h2>Dados do comprador</h2>
            <form id="form" onsubmit="return false">
                <p><strong>Nome: </strong></p>
                <input id="orderName" type="text" placeholder="nome..."/>
                <p><strong>Telefone: </strong></p>
                <input id="orderPhone" type="text" placeholder="telefone..."/>
                <p><strong>CPF: </strong></p>
                <input id="orderCpf" type="text" placeholder="cpf..."/>
                <p><strong>Endereço de entrega: </strong></p>
                <input id="orderAdress" type="text" placeholder="endereço..."/>
                <p><strong>Método de pagamento: </strong> Pix</p>
                
                <button type="button" className="CartOrderDetailsSave" onClick={ saveUserInfo }>Salvar Dados</button>
            </form>   
        </div>
    )
}