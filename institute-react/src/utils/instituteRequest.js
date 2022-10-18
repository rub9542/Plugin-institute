import axios from 'axios'
const { INST_API_URL } = process.env

const instituteRequest = axios.create({
  baseURL: INST_API_URL || 'https://example.com/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default instituteRequest
