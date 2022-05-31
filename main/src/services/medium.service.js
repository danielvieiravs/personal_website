import axios from "../axios";
import store from "./store"

const MediumService = {
    leadsOverTime: async function(group_by = '') {
        await axios.get(
            `https://medium.com/m/oauth/authorize?client_id=${ store.state.medium.clientId }
            &scope=basicProfile,publishPost
            &state={{state}}
            &response_type=code
            &redirect_uri={{redirectUri}}`)
            .then( response => {
            return response
            })
            .catch( error => {
            console.log(error)
            })
    }
};

export default MediumService
export { MediumService }