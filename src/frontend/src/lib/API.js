import axios from "axios";
// eslint-disable-next-line
export default {

    Students: {
        getAll: function() {
            return axios.get('/api/v1/students');
        }
    }
};