import axios from "axios";
import getConfig from "../config";

const groupService = {
    groups: null,
    receiveGroups: function () {
        return axios.get(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/groups`);
    },
    receiveGames: function () {
        return axios.get(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/games`);
    }
};

export default groupService;
