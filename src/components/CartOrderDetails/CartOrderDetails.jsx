import './CartOrderDetails.css'

export default function CartOrderDetails() {
    return (
        <div className='CartOrderDetails'>
            <h2>Dados do comprador</h2>
            <p><strong>Nome:</strong> Luiza Pereira Moreira</p>
            <p><strong>Telefone:</strong> (51) 999887766</p>
            <p><strong>CPF:</strong> 99900099900</p>
            <p><strong>Endereço de entrega:</strong> Rua Aleatória 99, Centro, Arroio dos Ratos, Rio Grande do Sul</p>
            <p><strong>Método de pagamento:</strong> Pix</p>
        </div>
    )
}