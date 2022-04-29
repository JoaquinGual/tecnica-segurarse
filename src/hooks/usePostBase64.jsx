import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


export const usePostBase64 = () => {
    const queryClient = useQueryClient();

    let data2 = '';

    const mutation = useMutation(async ({ nombre, apellido }) => {
        const datos = JSON.stringify({ nombre, apellido });




        return await axios.post(`https://localhost:44397/Segurarse/User/PostBase64`, datos, {
            headers: { 'Content-Type': 'application/json', 'Authorization': data2 }
        });

    },
        {
            onSuccess: () => { queryClient.invalidateQueries('getanswer'); },
        }
    );
    const postBase64 = async (nombre, apellido) => {
        try {

            const data = await axios.get(`https://localhost:44397/Segurarse/User/GetBase64?nombre=${nombre}&apellido=${apellido}`);



            data2 = data?.data;

          


            const response = await mutation.mutateAsync({ nombre, apellido });
            


            return {
                data: response?.data,
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
