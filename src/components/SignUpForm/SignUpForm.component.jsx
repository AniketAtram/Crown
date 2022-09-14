import './SignUpForm.styles.scss';
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAut } from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput.component';
import './SignUpForm.styles.scss';
import Button from '../Button/Button.component';

function SignUp() {


    const initialFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }


    const [formFields, setFormFields] = useState(initialFormFields);


    const { displayName, email, password, confirmPassword } = formFields;


    // console.table(formFields);

    const onChangeHandler = (event) => {

        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });

    };


    const resetFormFields = () => {
        setFormFields(initialFormFields);
    }


    const onSubmitHandler = async (event) => {

        // prevent any default behaviour
        event.preventDefault();

        if (password !== confirmPassword) {
            console.log("password do not match!");
            return;
        }

        try {
            // create a new user credentials in forebase by passing username and password
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
            // Crete a user document inside firestore

            await createUserDocumentFromAut(user, { displayName });
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already in use!!");
            }
            else {
                console.error(error.message);
            }
        }
    };


    return (
        <>
            <div className='sing-up-form-container'>


                <h2>Don't have an account?</h2>


                <span>Sign up with your email and password</span>


                <form onSubmit={onSubmitHandler}>



                    <FormInput onChange={onChangeHandler} name="displayName" label='displayName' value={displayName} required type="text" />


                    <FormInput onChange={onChangeHandler} name="email" label='email' value={email} required type="email" />


                    <FormInput onChange={onChangeHandler} name='password' label='password' value={password} required type="password" />


                    <FormInput onChange={onChangeHandler} name='confirmPassword' label='confirmPassword' value={confirmPassword} required type="password" />


                    <Button type='submit' children="Sign Up" buttonType='default' />


                </form>
            </div>
        </>
    );
}

export default SignUp;