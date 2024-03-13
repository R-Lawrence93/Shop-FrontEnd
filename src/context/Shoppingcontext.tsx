import { ReactNode, createContext, useContext, useState } from "react";


type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext  = {
    getItemQuantity: (id: number) => number
    IncreaseQuantity: (id: number) => void
    DecreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void

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



    return <ShoppingCartContext.Provider value={{getItemQuantity, IncreaseQuantity}} >
        {children}
    </ShoppingCartContext.Provider>
}