const getToken = state => state?.auth?.token
const getInstituteCampusId = state => state?.auth?.instituteCampusId

const selectors = {
  getToken,
  getInstituteCampusId,
}

export default selectors
