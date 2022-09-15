import './SignInForm.styles.scss';
import {useState} from 'react'
import { SignInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../FormInput/FormInput.component';
import './SignInForm.styles.scss';
import Button from '../Button/Button.component';

function SignIn() {

    const initialFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(initialFormFields);
    const { email, password } = formFields;

    const onChangeHandler = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});

    };


    const resetFormFields = () => {
        setFormFields(initialFormFields);
    }

    const GoogleSignInHandler = async () =>{
        await SignInWithGooglePopup();
    };

    const onSubmitHandler = async (event) =>{

        event.preventDefault();


        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            
        }

        catch(error){

            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong password!');
                    break;
                case 'auth/user-not-found':
                    alert('No user associatedd with this email!');
                    break;
                default:
                    console.error(error.code);
            }

            // if(error.code === 'auth/wrong-password'){
            //     console.error("Wrong Password!");
            // }
            // else if (error.code === 'auth/user-not-found'){
            //     console.error("Wrong Username!");
            // }
        }
    };


    return ( 
        <>
            <div className='sing-up-form-container'>


                <h2>Already have an account?</h2>


                <span>Sign in with your email and password</span>


                <form onSubmit={onSubmitHandler}>
            

                    <FormInput onChange={onChangeHandler} name='email' label='email' value={email} required type="email" />


                    <FormInput onChange={onChangeHandler} name='password' label='password' value={password} required type="password" />


                    <div className='buttons-container'>
                    
                        <Button type='submit' children="Sign In" buttonType='default'/>

                        <Button type='button' onClick={GoogleSignInHandler} buttonType="google" children={'Google Sign In'} />
                    
                    </div>

                </form>
            </div>
        </>
     );
}

export default SignIn;