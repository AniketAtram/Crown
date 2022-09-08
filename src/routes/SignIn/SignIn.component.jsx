import { createUserDocumentFromAut, SignInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {

    const userSignInHandler = async () =>{
        const response = await SignInWithGooglePopup();
        const { user } = response;
        const userDocRef = createUserDocumentFromAut(user);
    };

    return ( 
        <>
            <div>
                <h1>Sign In Page</h1>
            </div>
            <div>
                <button onClick={userSignInHandler} >Sign In With Google!</button>
            </div>
        </>
     );
}

export default SignIn;