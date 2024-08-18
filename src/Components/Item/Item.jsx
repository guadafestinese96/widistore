import "./Item.css"

export default function Item({ item }) {
    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.modelo} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.modelo}</h3>
            </div>
        </div>
    )
}