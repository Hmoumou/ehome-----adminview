import axios from 'axios'

 
let baseURL = process.env.BASE_API
var instance = axios.create({
    baseURL,
    timeout:15000,
})
class xhr {
    static get(url, data, config){
        return new Promise((resolve,reject)=>{
            instance.get(url, {params:data},config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    static fetch(url, data, config, methods){
        return new Promise((resolve, reject)=>{
            instance[methods](url, data, config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    static post(url, data, config){
       return this.fetch(url, data, config,'post')
    }
    static delete(url, data, config){
        return this.fetch(url, data, config,'delete')
     }
    static patch(url, data, config){
        return this.fetch(url, data, config, 'patch')
    }
}
export default xhr