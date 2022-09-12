import './SignUpForm.styles.scss';
import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAut } from '../../utils/firebase/firebase.utils';


function SignUp() {

    
    const initialFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }


    const [formFields, setFormFields] = useState(initialFormFields);


    const {displayName, email, password, confirmPassword} = formFields;
    
    
    console.table(formFields);

    const onChangeHandler = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});

    };


    const resetFormFields = () => {
        setFormFields(initialFormFields);
    }


    const onSubmitHandler = async (event) =>{

        // prevent any default behaviour
        event.preventDefault();

        if (password !== confirmPassword){
            console.log("password do not match!");
            return;
        }

        try{
            // create a new user credentials in forebase by passing username and password
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
            // Crete a user document inside firestore

            await createUserDocumentFromAut(user, { displayName });
        }
        catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert("Email already in use!!");
            }
            else{
                console.error(error.message);
            }
        }
    };


    return ( 
        <>
            <div>


                <h1>Sign up with your email and password</h1>


                <form onSubmit={onSubmitHandler}>


                    <label>Display Name</label>
                    <input onChange={onChangeHandler} name='displayName' value={displayName} required type="text" />


                    <label>Emai</label>
                    <input onChange={onChangeHandler} name='email' value={email} required type="email" />


                    <label>Password</label>
                    <input onChange={onChangeHandler} name='password' value={password} required type="password" />


                    <label>Confirm Password</label>
                    <input onChange={onChangeHandler} name='confirmPassword' value={confirmPassword} required type="password" />
                    

                    <button type="submit">Sign Up</button>


                </form>
            </div>
        </>
     );
}

export default SignUp;