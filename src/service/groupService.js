import axios from "axios";
import getConfig from "../config";

const groupService = {
    groups: null,
    receiveGroups: function () {
        return axios.get(`http://${getConfig().API_ENDPOINT}/gigabyte/api/v1/groups`);
    }
};

export default groupService;
