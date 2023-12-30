import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("https://fakestoreapi.com/products/");
    }
    getByProductId(title){
        return axios.get("https://fakestoreapi.com/products/"+title);
    }
}
