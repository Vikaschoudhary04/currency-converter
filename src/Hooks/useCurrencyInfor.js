import {useState, useEffect} from 'react'

function useCurrencyInfor(currency) {
    const[data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
        .then((response) => response.json())
        .then((response) =>{
            setData(response.rates)
        })
    }, [currency])

    return data
}

export default useCurrencyInfor;
