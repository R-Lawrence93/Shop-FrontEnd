import { useShoppingCart } from "../context/Shoppingcontext"

import { CartItem } from "../components/CartItem"
import { formarCurrency } from "../utilities/currencyformat"
import storeItems from "../data/items.json"


export function ShoppingCart() {
    const { cartItems } = useShoppingCart()
    return ( <>

    <div> <h1>Items in Cart</h1></div>
    <div>
        {cartItems.map(item => (
            <CartItem key = {item.id} {...item} /> ))}
    </div>
    <div className="total"> Cart Total {formarCurrency(cartItems.reduce((total, CartItem) => {
        const item = storeItems.find(i => i.id === CartItem.id)
        return total + (item?.price || 0 ) * CartItem.quantity
    }, 0)
    )}</div>
    </>
    )}