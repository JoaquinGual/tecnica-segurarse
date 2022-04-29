import axios from 'axios'
import {useQuery} from 'react-query'
export const useGetActiveUsers = () => {
  const userData = useQuery('userdata', () => {
    
    return axios.get('https://localhost:44397/Segurarse/User/GetActiveUsers')
    
  });
  
  return {
      data: userData.data,
      loading: userData.isLoading,
      error: userData.isError
  };
};