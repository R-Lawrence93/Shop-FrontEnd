import { formarCurrency } from "../utilities/currencyformat"
import "../style.css"
import { useShoppingCart } from "../context/Shoppingcontext"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}



export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const {getItemQuantity, IncreaseQuantity, DecreaseQuantity, removeFromCart} = useShoppingCart() 

    const quantity = getItemQuantity(id)
    return <>
    <div>
        <img src={imgUrl} style={{ height: "auto", width: "80%", margin:"2%"}}></img>
        <div>
            <span className=""><b>{name}</b></span>
            <span>{formarCurrency (price)}</span>

            </div>

            <div className="mt-auto">
                {quantity === 0 ? (

                    <button className="w-100" onClick={() => IncreaseQuantity(id)}> + Add To Cart </button>

                ) : <div> 
                        <div className="addBtn" style={{gap: ".5rem"}} >
                            
                            <button onClick={() => DecreaseQuantity(id)}>-</button>
                            <span className="fs-3"> {quantity + " in cart"} </span>
                            <button onClick={() => IncreaseQuantity(id)}>+</button>

                        </div>


                        <div className="rmvBtn">
                            
                            <button className="bg-danger" onClick={() => removeFromCart(id)}> Remove </button>
                
                        </div> 
                
                    </div>}
            </div>


       
    </div>
    </>
}