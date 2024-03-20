import { useShoppingCart } from "../context/Shoppingcontext"
import storeItem from "../data/items.json"
import { formarCurrency } from "../utilities/currencyformat"
import "../style.css"

type CartItemProps = {
    id: number
    quantity: number
}




export function CartItem({id, quantity}: CartItemProps) {
    
    const { removeFromCart } = useShoppingCart()
    const item = storeItem.find(i => i.id === id)
    if (item == null) return null


    return <> 
        <div className="cartCard"> 
                <img src={item.imgUrl} style={{width: "125px" , height: "75px", margin:"2%"}}/>

            <div style={{margin:""}}>
                    <b>{item.name}</b> {quantity > 1 && <span> x{quantity}</span>}
                <div style={{margin:"5%"}}>
                    {formarCurrency(item.price)}
                </div>
                
                <div>
                   {item.name} Total {formarCurrency(item.price * quantity)}
                    
                </div>
            </div> 
                <button className="ms-auto bg-transparent" style={{border:"none"}} onClick={() => removeFromCart(item.id)}> X </button>
            
        </div>
        </>

}