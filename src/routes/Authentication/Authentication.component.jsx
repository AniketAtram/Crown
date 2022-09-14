import SignUp from "../../components/SignUpForm/SignUpForm.component";
import SignIn from "../../components/SignInForm/SignInForm.component";
import './Authentication.styles.scss';

function Authentication() {

    return (
        <>
            <div className="authentication-container">
                <SignIn />
                <SignUp />
            </div>
        </>
    );
}

export default Authentication;