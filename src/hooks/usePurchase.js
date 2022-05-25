import { useEffect, useState } from "react"

const usePurchase = id => {
    const [purchaseItem, setPurchaseItem] = useState({})
    useEffect(() => {
        const url = `https://warm-sierra-80009.herokuapp.com/bikes/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchaseItem(data))
    }, [id])
    return [purchaseItem]
}
export default usePurchase;