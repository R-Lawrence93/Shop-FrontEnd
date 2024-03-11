type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}



export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    return <>
    <div>
        <img src={imgUrl} style={{objectFit: "cover", height: "200px", width: "200px", margin:"2%"}}></img>
        <div className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="">{name}</span>
            <span>{price}</span>

        </div>
    </div>
    </>
}