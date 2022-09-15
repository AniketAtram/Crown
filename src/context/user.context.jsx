import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAut, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=> {
            // If user exists it logs in user else creates a new user
            // and retuns the details of users 
            user?createUserDocumentFromAut(user):setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};