export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 6 || values.password.length > 20){
        errors.password = "Must be greater then 6 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;

}

export function registerValidate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

       // validation for password
       if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 6 || values.password.length > 20){
        errors.password = "Must be greater then 6 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    // validate confirm password
    if(!values.rePassword){
        errors.rePassword = "Required";
    } else if(values.password !== values.rePassword){
        errors.rePassword = "Password Not Match...!"
    } else if(values.rePassword.includes(" ")){
        errors.rePassword = "Invalid Confirm Password"
    }

    return errors;
}