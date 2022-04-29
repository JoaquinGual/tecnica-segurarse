import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


export const useAddUser = () => {
    const queryClient = useQueryClient();
    


    const mutation = useMutation(({nombre, apellido}) => {
        return axios.post(`https://localhost:44397/Segurarse/User/AddUser?nombre=${nombre}&apellido=${apellido}`);
    },
        {
            onSuccess: () => { queryClient.invalidateQueries('userdata'); },
        }
    );
    const addUser = async ( nombre, apellido ) => {
        try {
            await mutation.mutateAsync( {nombre, apellido} );
            return {
                data: mutation.data?.data,
                error: mutation.isError,
                loading: mutation.isLoading
            };
        }catch (error) {
            return {
                data: mutation.data?.data,
                error:true,
                loading: false
            };
        }
    }
    return {addUser};
}


