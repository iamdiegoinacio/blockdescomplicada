import { useEffect, useState, createContext } from 'react';
import firebase from '../services/firebase';

export const AuthContext = createContext({

});

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ loading, setLoading ] = useState();
    const [ isFirstEnter, setIsFirstEnter ] = useState(false);

    return (
        <AuthContext.Provider value={{ signed: !!currentUser, currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    )  
}

export default AuthProvider;