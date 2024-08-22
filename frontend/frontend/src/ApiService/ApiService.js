import apiClient from "./Apiclient";


export const viewAllUsers = () => {
    return apiClient.get('/view-all');
  };


  export const saveUser = (data) => {
    return apiClient.post('/save', data);
  };

