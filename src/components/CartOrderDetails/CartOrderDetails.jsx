import './CartOrderDetails.css'

export default function CartOrderDetails() {
    
    return (
        <div className='CartOrderDetails'>
            <h2>Dados do comprador</h2>
            <p><strong>Nome: </strong></p>
                <input id="orderName" type="text" placeholder="nome..." disabled value="Fulano da Silva Sauro"></input>
            <p><strong>Telefone: </strong></p>
                <input id="orderPhone" type="text" placeholder="telefone..." disabled value="55 52 999008899"/>
            <p><strong>CPF: </strong></p>
                <input id="orderCpf" type="text" placeholder="cpf..." disabled value="09878998009"/>
            <p><strong>Endereço de entrega: </strong></p>
                <input id="orderAdress" type="text" placeholder="endereço..." disabled value="Rua Beltrano da Silva Silva"/>
            <p><strong>Método de pagamento: </strong> Pix</p>
        </div>
    )
}