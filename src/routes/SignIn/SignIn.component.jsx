import { SignInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {

    const userSignInHandler = async () =>{
        const response = await SignInWithGooglePopup();
        console.log(response);
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