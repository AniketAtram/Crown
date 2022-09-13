import './Button.styles.scss';
function Button({children, buttonType, ...otherProps}) {

    // Mapper for buttonType prop
    const buttonTypeMap = {
        google: 'google-sign-in',
        inverted: 'inverted',
    };

    return ( 
        <>
            <button className={` button-container ${buttonTypeMap[buttonType]}`} {...otherProps} >
                {children}
            </button>
        </>
     );
}

export default Button;