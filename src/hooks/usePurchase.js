import { useEffect, useState } from "react"

const usePurchase = id => {
    const [purchaseItem, setPurchaseItem] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchaseItem(data))
    }, [id])
    return [purchaseItem]
}
export default usePurchase;