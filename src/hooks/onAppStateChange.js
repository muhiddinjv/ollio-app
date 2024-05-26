import { useEffect } from "react"
import { AppState, Platform } from 'react-native'
import { focusManager } from '@tanstack/react-query'

function onAppStateChange(status) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener('change', onAppStateChange)

  return () => subscription.remove()
}, [])