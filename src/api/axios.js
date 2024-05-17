import { useToast } from 'vue-toast-notification'
import axios from 'axios'
import { objCheckType, parseErrorsFromResponse } from '~/utils'
import { useAllServices } from '~/composables/app.api'

export default defineNuxtPlugin(() => {
  const { refreshAuthToken } = useAllServices()
  const config = useRuntimeConfig()
  const $toast = useToast()
  const router = useRouter()
  let errorMessage = null

  const apiClient = axios.create({
    baseURL: `${config.public.apiBase}/api`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      mode: 'no-cors',
    },
  })

  const unAuthenticate = async () => {
    window?.localStorage?.removeItem('auth')
    delete apiClient.defaults.headers.Authorization
    await router.push('/')
  }

  const errorStatus = {
    401: async (error) => {
      errorMessage = error?.response?.data?.message
      if (error?.response?.data?.message === 'Token has expired') {
        return refreshToken(error)
      }
      if (
        error?.response?.data?.message === 'Token not provided' ||
        error?.response?.data?.message === 'User not found'
      ) {
        return false
      } else if (
        (errorMessage !== 'Token not provided' ||
          errorMessage !== 'User not found') &&
        errorMessage
      ) {
        await unAuthenticate()
      }
    },
    419: function () {
      router?.back() || router.push('/')
    },
  }

  let requestPromise = null
  const refreshToken = async (error) => {
    const request = error.config
    let response = null
    try {
      if (requestPromise) {
        response = await requestPromise
      } else {
        requestPromise = refreshAuthToken()
        response = await requestPromise
      }
      if (response) {
        const token = 'Bearer' + ' ' + response.data?.token
        if (apiClient?.defaults?.headers?.common) {
          apiClient.defaults.headers.common.Authorization = token
        } else throw new Error('Ошибка во время установки токена')
        window?.localStorage?.setItem('auth', JSON.stringify(token))
        return apiClient(request)
      }
    } catch (e) {
      window?.localStorage?.setItem('auth', null)
      await router.push('/error')
      delete apiClient.defaults.headers.common.Authorization
    } finally {
      requestPromise = null
    }
    return null
  }

  const authInterceptor = (config) => {
    const authToken = window?.localStorage?.getItem('auth')
    if (authToken) {
      config.headers.Authorization = getAuthorizationHeader()
    }
    return config
  }

  const generateToaster = (errors) => {
    if (errors && objCheckType(errors, 'string')) {
      $toast.error(errors)
    } else if (errors && errors.length) {
      errors.forEach((error) => {
        $toast.error(error)
      })
    }
  }
  const errorInterceptor = async (error) => {
    const errors = parseErrorsFromResponse(error)
    if (error?.response?.status in errorStatus) {
      const responseWithRefreshedToken =
        await errorStatus[error.response.status](error)
      if (responseWithRefreshedToken) {
        return Promise.resolve(responseWithRefreshedToken)
      }
      errorStatus[error.response.status]()
    }
    if (
      error.response?.data?.error?.code !== 1001 &&
      error.response?.data?.message !== 'User not found' &&
      error.response?.data?.message !== 'Token not provided'
    ) {
      generateToaster(errors)
    }
    return Promise.reject(error)
  }
  const responseInterceptor = (response) => response
  apiClient.interceptors.response.use(responseInterceptor, errorInterceptor)
  apiClient.interceptors.request.use(authInterceptor)

  return {
    provide: {
      apiClient,
    },
  }
})
