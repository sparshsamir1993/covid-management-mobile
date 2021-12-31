const { axiosInstance } = require("../utils/axios")
export const login = async (email, password) => {
    console.log(axiosInstance)
    const response = await axiosInstance.post("/user/login").catch(e => console.log(e));
}

export const register = async (email, password) => {
    const response = await axiosInstance.post("/user/signup", { email, password }).catch(e => console.log(e));
    console.log(response);
}
