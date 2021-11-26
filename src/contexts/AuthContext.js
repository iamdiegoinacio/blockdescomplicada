import { useEffect, useState, createContext } from 'react';
import firebase from '../services/firebase';
import { Redirect } from 'react-router-dom';

export const AuthContext = createContext({

});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState();

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('CurrentUser');

            if (storageUser) {
                setCurrentUser(JSON.parse(storageUser));
            }
        }

        loadStorage();
    }, [])

    async function signUp(email, password, name, surname) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        name: name,
                        surname: surname,
                        email: value.user.email,
                        avatarUrl: null,
                        progress: 0
                    })
                    .then(async () => {

                        await firebase.firestore().collection('user_progress')
                        .doc(uid).set({
                            uid: uid,
                            firstModule: false,
                            secondModule: false,
                            thirdModule: false,
                            fourthModule: false
                        })
                        .then(() => {
                            console.log(value);
                            let data = {
                                uid: uid,
                                name: name,
                                surname: surname,
                                email: value.user.email,
                                avatarUrl: null,
                                progress: 0,
                                firstModule: false,
                                secondModule: false,
                                thirdModule: false,
                                fourthModule: false
                            }
    
                            setCurrentUser(data);
                            storageCurrentUser(data);

                            return <Redirect to="/modulos"/>
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const userProfile = await firebase.firestore().collection('users').doc(uid).get();
                const userProgress = await firebase.firestore().collection('user_progress').doc(uid).get();

                let data = {
                    uid: uid,
                    name: userProfile.data().name,
                    surname: userProfile.data().surname,
                    avatarUrl: userProfile.data().avatarUrl,
                    email: value.user.email,
                    progress: userProfile.data().progress,
                    firstModule: userProgress.data().firstModule,
                    secondModule: userProgress.data().secondModule,
                    thirdModule: userProgress.data().thirdModule,
                    fourthModule: userProgress.data().fourthModule
                }

                setCurrentUser(data);
                storageCurrentUser(data);
            })
    }

    async function logOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('CurrentUser');
        setCurrentUser(null);
    }

    function resetPassword(email) {
        firebase.auth().sendPasswordResetEmail(email);
        return true;
    }

    function storageCurrentUser(data) {
        localStorage.setItem('CurrentUser', JSON.stringify(data));
    }

    async function updatePassword(newPassword, oldPassword) {
        const user = await firebase.auth().currentUser;
        if (newPassword && user) {
            user.updatePassword(newPassword)
                .then((response) => {
                    return true;
                })
                .catch((error) => {
                    if(error.code==='auth/requires-recent-login'){
                        user.reauthenticateWithCredential(oldPassword)
                        .then(() => {
                            user.updatePassword(newPassword)
                            .then(() => {

                            })
                            .catch((error) => {
                                console.log(error);
                            })
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    }
                })
        }else{
           return false;
        }
    }

    async function completeModule(module){
        if(module===1){
            await firebase.firestore().collection('user_progress').doc(currentUser.uid).update({
               firstModule: true 
            })
            .then(async () => {
                console.log('First Module true');
    
                const user = await firebase.firestore().collection('users').doc(currentUser.uid).get();

                await firebase.firestore().collection('users').doc(currentUser.uid).update({
                    progress: user.data().progress + 25
                })
                .then(() => {
                    let storageUser = JSON.parse(localStorage.getItem('CurrentUser'));
                    storageUser.firstModule = true;
                    storageUser.progress = storageUser.progress += 25;
                    storageCurrentUser(storageUser);
                    return <Redirect to="/modulos"/>
                })
                .catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) => {
                console.log(error);
            })
        }else if(module===2){
            await firebase.firestore().collection('user_progress').doc(currentUser.uid).update({
                secondModule: true 
             })
             .then(async () => {
                 console.log('Second Module true');
     
                 const user = await firebase.firestore().collection('users').doc(currentUser.uid).get();
 
                 await firebase.firestore().collection('users').doc(currentUser.uid).update({
                     progress: user.data().progress + 25
                 })
                 .then(() => {
                     let storageUser = JSON.parse(localStorage.getItem('CurrentUser'));
                     storageUser.secondModule = true;
                     storageUser.progress = storageUser.progress += 25;
                     storageCurrentUser(storageUser);
                     return <Redirect to="/modulos"/>
                 })
                 .catch((error) => {
                     console.log(error);
                 });
             })
             .catch((error) => {
                 console.log(error);
             });
        }else if(module===3){
            await firebase.firestore().collection('user_progress').doc(currentUser.uid).update({
                thirdModule: true 
             })
             .then(async () => {
                 console.log('Second Module true');
     
                 const user = await firebase.firestore().collection('users').doc(currentUser.uid).get();
 
                 await firebase.firestore().collection('users').doc(currentUser.uid).update({
                     progress: user.data().progress + 25
                 })
                 .then(() => {
                     let storageUser = JSON.parse(localStorage.getItem('CurrentUser'));
                     storageUser.thirdModule = true;
                     storageUser.progress = storageUser.progress += 25;
                     storageCurrentUser(storageUser);
                     window.location.reload();
                 })
                 .catch((error) => {
                     console.log(error);
                 });
             })
             .catch((error) => {
                 console.log(error);
             });
        }else if(module===4){
            await firebase.firestore().collection('user_progress').doc(currentUser.uid).update({
                fourthModule: true 
             })
             .then(async () => {
                 console.log('Second Module true');
     
                 const user = await firebase.firestore().collection('users').doc(currentUser.uid).get();
 
                 await firebase.firestore().collection('users').doc(currentUser.uid).update({
                     progress: user.data().progress + 25
                 })
                 .then(() => {
                     let storageUser = JSON.parse(localStorage.getItem('CurrentUser'));
                     storageUser.fourthModule = true;
                     storageUser.progress = storageUser.progress += 25;
                     storageCurrentUser(storageUser);
                     window.location.reload();
                 })
                 .catch((error) => {
                     console.log(error);
                 });
             })
             .catch((error) => {
                 console.log(error);
             });
        }else{
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!currentUser, currentUser, loading, signUp, signIn, logOut, resetPassword, updatePassword, completeModule}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;