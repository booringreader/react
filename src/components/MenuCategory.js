import ItemList from "./ItemList";

const MenuCategory = (props) => {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div>
            <div className="header w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-100 rounded-sm">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-md">{props.data.title}({props.data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                <ItemList items={props.data.itemCards} />
            </div>
        </div>
    )
}
export default MenuCategory;