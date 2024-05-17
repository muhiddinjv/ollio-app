export const useAllServices = () => {
  const { $apiClient } = useNuxtApp()

  const getMe = (params) => $apiClient.post('/login', params)

  const getFee = (params) => $apiClient.get('/fee', { params })

  const getInfo = () => $apiClient.get('/info')

  const refreshAuthToken = () => $apiClient.post(`/refresh`)

  const getCompletedFee = (params) => $apiClient.get('/fee', { params })

  const getDetailPatient = (patientId) => $apiClient.get(`/fee/${patientId}`)

  const getPatientNews = (params) => $apiClient.get(`/news`, { params })

  const getMyFee = () => $apiClient.get(`/myFees`)

  const setToken = function (token) {
    if ($apiClient?.defaults?.headers?.common) {
      $apiClient.defaults.headers.common.Authorization = token
    } else throw new Error('Ошибка во время установки токена')
    window?.localStorage?.setItem('auth', JSON.stringify(token))
  }

  return {
    getMe,
    getFee,
    refreshAuthToken,
    getInfo,
    getCompletedFee,
    getDetailPatient,
    getPatientNews,
    getMyFee,
    $apiClient,
    setToken,
  }
}
