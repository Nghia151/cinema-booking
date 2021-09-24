import axios from 'axios';
import { BASE_URL } from 'settings/apiConfig';

class callApi {
    getApi = (endpoint) => {
    return axios({
      url: `${BASE_URL}/${endpoint}`,
      method:'GET',
      
    });
  }
  postApi =(endpoint, data = null) =>{
    return axios({
      url: `${BASE_URL}/${endpoint}`,
      method: 'POST',
      data,
    })
  }
}
export default callApi;
// export default postApi;