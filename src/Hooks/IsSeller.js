import { useEffect, useState } from "react";



const IsSellerHook = email => {
    const [isSeller, setIsSeller] = useState(false);

    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://resale-land-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller)
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}


export default IsSellerHook;