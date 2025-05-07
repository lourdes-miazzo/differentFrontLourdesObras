import axios from "axios"

const API= "http://localhost:8080"

export const getAllTexts = async () => {
    try {
        const response = await axios.get(`${API}/textos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getOneText = async (id) => {
    try {
        const response = await axios.get(`${API}/textos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const searchAllWorks= async()=>{
    try {
        const response= await axios.get(`${API}/obras/`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const oneWork= async(id)=>{
    try {
        const response= await axios.get(`${API}/obras/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const allProcess= async()=>{
    try {
        const response= await axios.get(`${API}/procesos/`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getOnePro= async(id)=>{
    try {
        const response= await axios.get(`${API}/procesos/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}
