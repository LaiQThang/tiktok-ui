import axios from 'axios';

const httRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const response = await httRequest.get(path, option);

    return response.data;
};

export default httRequest;
