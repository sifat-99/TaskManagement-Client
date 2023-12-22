import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-rho-six.vercel.app'
    // baseURL: 'http://localhost:5001'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;