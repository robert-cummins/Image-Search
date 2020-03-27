import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dXgb1yXvlV4a0E_TR_8Ehgg4yQS53I_hey7y-pEtbPY' 
    }
})