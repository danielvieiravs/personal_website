import axios from 'axios';

import store from "../store";

const MediumService = {
    async getPosts() {
        const { data } = await axios.get(
            `http://localhost:5000/api/medium/posts/${ store.state.medium.userId }`);
        return data
    },
};

export default MediumService
export { MediumService }