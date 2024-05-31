import * as React from "react"
import { getAccessToken, setAccessToken, removeAccessToken } from "./astorage"

const AuthContext = React.createContext({
  status: "idle",
  userToken: null,
  signIn: () => {},
  signOut: () => {}
})

// In case you want to use Auth functions outside React tree
export const AuthRef = React.createRef()

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be inside an AuthProvider with a value")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, {
    status: "idle",
    userToken: null
  })

  React.useEffect(() => {
    const initState = async () => {
      try {
        const userToken = await getAccessToken()
        if (userToken !== null) {
          dispatch({ type: "SIGN_IN", token: userToken })
        } else {
          dispatch({ type: "SIGN_OUT" })
        }
      } catch (e) {
        // catch error here
        console.log(e)
        // Maybe sign_out user!
      }
    }

    initState()
  }, [])

  React.useImperativeHandle(AuthRef, () => authActions)

  const authActions = React.useMemo(
    () => ({
      signIn: async token => {
        dispatch({ type: "SIGN_IN", token })
        await setAccessToken(token)
      },
      signOut: async () => {
        console.log('signout completed');

        await removeAccessToken() // TODO: use Vars
        dispatch({ type: "SIGN_OUT" })
      }
    }),
    []
  )

  return (
    <AuthContext.Provider value={{ ...state, ...authActions }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthReducer = (prevState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        status: "signedIn",
        userToken: action.token
      }
    case "SIGN_OUT":
      return {
        ...prevState,
        status: "signedOut",
        userToken: null
      }
  }
}
