import axios from 'axios';

export const useGetBase64 = async (nombre,apellido) => {
    const URL = `https://localhost:44397/Segurarse/User/GetBase64?nombre=${nombre}&apellido=${apellido}`;
    const response = await axios.get(URL);
    return response;
}
