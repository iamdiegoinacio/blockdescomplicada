import React, { useContext, useEffect, useState } from 'react';
import firebase from '../services/firebase'
import 'firebase/auth';

const auth = firebase.auth();
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState();
}

export default AuthProvider;