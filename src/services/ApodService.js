import { apodApi } from './AxiosService.js'
import { AppState } from '../AppState.js'

class ApodService {

    async getImage() {
        try {
            const res = await apodApi.get('')
            AppState.apodImg = res.data
        } catch (error) {
            console.error(error);
        }
    }

}


export const apodService = new ApodService()