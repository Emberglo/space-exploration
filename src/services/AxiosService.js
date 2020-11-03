import Axios from 'axios'

export const apodApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=hE1aHdFhQaTc5wQWzQhJv4VWT3YFJObTsAs4rtIU',
  timeout: 3000
})

