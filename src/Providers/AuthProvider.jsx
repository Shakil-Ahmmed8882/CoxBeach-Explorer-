import { createContext } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


      const userIfo = {
            user:'unKnown'
      }
      return (
      <AuthContext.Provider value={userIfo}>
            {children}
      </AuthContext.Provider>
      );
};



// prop validation object
AuthProvider.propTypes = {
      children: PropTypes.node.isRequired
}

export default AuthProvider;