import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const usePostBase64 = () => {
    const queryClient = useQueryClient();
    const [val, setVal] = useState();

    // const getAnswer = async () => {
    //     const data = await axios(`https://localhost:44397/Segurarse/User/GetBase64?nombre=${nombre}&apellido=${apellido}`);
    //     setVal(data.data);
    // };
    // getAnswer();
    const mutation = useMutation(({ nombre, apellido }) => {
        const datos = JSON.stringify({ nombre, apellido });





        return axios.post(`https://localhost:44397/Segurarse/User/PostBase64`, datos, {
            headers: { 'Content-Type': 'application/json', 'Authorization': val }
        });
    },
        {
            onSuccess: () => { queryClient.invalidateQueries('getanswer'); },
        }
    );
    const postBase64 = async (nombre, apellido) => {
        try {

            const data = await axios.get(`https://localhost:44397/Segurarse/User/GetBase64?nombre=${nombre}&apellido=${apellido}`);
            console.log(data.data)

            setVal(data.data);
            console.log(val);


            await mutation.mutateAsync({ nombre, apellido });
            return {
                data: mutation.data?.data,
                error: mutation.isError,
                loading: mutation.isLoading
            };
        } catch (error) {
            return {
                data: mutation.data?.data,
                error: true,
                loading: false
            };
        }
    }
    return { postBase64 };
}
