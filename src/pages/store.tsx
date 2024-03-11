import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"


export function Store() {
    return <>
    <h1>Store</h1>

        {storeItems.map(item => ( <div className="card" key={item.id}><StoreItem {...item}/></div>))}
    </>
};