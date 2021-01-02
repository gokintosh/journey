import axios from 'axios'

class JourneyDataService{

    retreiveAllJournals(name){
        return axios.get(`http://localhost:8080/users/${name}/journals`)
        console.log("executed serice")
    }

    
    deleteJournal(name,id){
        return axios.delete(`http://localhost:8080/users/${name}/journals/${id}`)
        console.log("executed serice")
    }


}

export default new JourneyDataService()