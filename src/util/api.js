import axios from 'axios'

export const api= axios.create({
        baseURL:'https://fakestoreapi.com'
    })


export const getProducts=async ()=>{
    const res=await api.get('/products')
    return res.data
}


export const getCategories=async ()=>{
    const res=await api.get('/products/categories')
    return res.data
}