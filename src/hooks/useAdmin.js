import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) { //backend  e call pathachci:
            fetch(`https://car-parts-manufacturer.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin); //admin ta backend theke ashce
                    setAdminLoading(false);
                })
        }

    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;