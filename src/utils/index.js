import axios from 'axios'

 
let baseURL = process.env.BASE_API
var instance = axios.create({
    baseURL,
    timeout:15000,
})
const xhr = {
    get(url, data, config){
        return new Promise((resolve,reject)=>{
            instance.get(url, {params:data},config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods){
        return new Promise((resolve, reject)=>{
            instance[methods](url, data, config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url, data, config){
       return this.fetch(url, data, config,'post')
    },
    delete(url, data, config){
        return this.fetch(url, data, config,'delete')
     }
}
export default xhr