import './ItemDetail.css'

export default function ItemDetail(props) {
    const valorSemDesconto = (parseInt(props.price) * 130) / 100

    return (
        <div className='ItemDetail'>
            <img src={props.pictureUrl} alt={`Imagem do produto ${props.title}`} />
            <div>
                <div className='ItemDetailInfos'>
                    <h2>{props.title}</h2>
                    <p>Vendido e entregue por Any Store</p>
                    <p className='ItemDetailInfosPrice'>De R$ {valorSemDesconto} por 
                        <br/>
                        <span className='ItemDetailInfosPriceNew'>R$ {props.price.replace('.',',')}</span>
                        <span className='ItemDetailInfosPriceDiscount'>30% OFF!</span>
                    </p>
                    <p className='ItemDetailInfosInstallment'>ou em até 20x de R${(valorSemDesconto/20).toString().replace('.',',')}</p>
                </div>
                <button type="button" class="ItemDetailBuy">COMPRAR</button>
            </div>
        </div>
    )
}