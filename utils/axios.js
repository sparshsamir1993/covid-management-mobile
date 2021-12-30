const axios = require("axios");
const AuthConstants = require("../constants");
const axiosInstance = axios.create({
    baseURL: AuthConstants.API_BASE_URL
})