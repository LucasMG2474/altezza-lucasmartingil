import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="listaProductos">
      {
        products.map(prod => <Item prod={prod} />)
      }

    </div>
  )

}



export default ItemList