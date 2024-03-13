import { formarCurrency } from "../utilities/currencyformat"
import "../style.css"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}



export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const quantity = 0
    return <>
    <div>
        <img src={imgUrl} style={{ height: "auto", width: "80%", margin:"2%"}}></img>
        <div className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="">{name}</span>
            <span>{formarCurrency (price)}</span>

            </div>

            <div className="mt-auto">
                {quantity === 0 ? (

                    <button className="w-100"> + Add To Cart </button>

                ) : <div> 
                        <div className="addBtn" style={{gap: ".5rem"}} >
                            
                            <button>-</button>
                            <span className="fs-3"> {quantity + " in cart"} </span>
                            <button>+</button>

                        </div>


                        <div className="rmvBtn">
                            
                            <button className="bg-danger"> Remove </button>
                
                        </div> 
                
                    </div>}
            </div>


       
    </div>
    </>
}