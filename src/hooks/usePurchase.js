import { useEffect, useState } from "react"

const usePurchase = id => {
    const [purchaseItem, setPurchaseItem] = useState({})
    useEffect(() => {
        const url = `https://car-parts-manufacturer.herokuapp.com/part/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchaseItem(data))
    }, [id])
    return [purchaseItem]
}
export default usePurchase;