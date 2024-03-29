import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext  = {

    getItemQuantity: (id: number) => number
    IncreaseQuantity: (id: number) => void
    DecreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number 
    cartItems: CartItem[]

}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext) 

export function useShoppingCart (){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ( {children}: ShoppingCartProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity (id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0 

    }

    function IncreaseQuantity (id: number){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function DecreaseQuantity (id: number){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity  === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })

    }




    return <ShoppingCartContext.Provider value={{
        getItemQuantity, 
        IncreaseQuantity,
        DecreaseQuantity, 
        removeFromCart,
        cartItems,
        cartQuantity
    }} >
    {children}
    </ShoppingCartContext.Provider>
}