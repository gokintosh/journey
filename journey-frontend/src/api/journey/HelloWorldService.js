import axios from "axios"




class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/helloworld/')
        console.log("executed serice")
    }
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/helloworld-bean/')
        console.log("executed serice")
    }
    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/helloworld/path-variable/${name}`);
        console.log("executed serice")
    }
}


export default new HelloWorldService()