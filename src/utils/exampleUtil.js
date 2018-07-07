export default function updateItemInArray(array, index){
    const updatedItems = array.map((item, i) => {
        if(index !== i){
            return item
        }
        const updatedItem = {...item, value: !item.value}
        return updatedItem
    })
    return updatedItems
}
