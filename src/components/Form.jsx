import React, { useState } from 'react';
import styles from './Form.module.css';


const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [passwordc, setPasswordc] = useState("");
    const [passwordcError, setPasswordcError] = useState("");
    

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, email, password, passwordc };
    //     console.log("Welcome", newUser);
    // };

    const valFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length >0) {
            setFirstNameError("Field must be at least 2 characters");
        } else if (e.target.value == false) {
            setFirstNameError("");
        }
    }

    const valLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length >0) {
            setLastNameError("Field must be at least 2 characters");
        } else if (e.target.value == false) {
            setLastNameError("");
        }
    }

    const valEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length >0) {
            setEmailError("Field must be at least 5 characters");
        } else if (e.target.value == false) {
            setEmailError("");
        }
    }

    const valPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length >0) {
            setPasswordError("Password must be at least 8 characters long");
        } else if (e.target.value == false) {
            setPasswordError("");
        }
    }

    const valPasswordc = (e) => {
        setPasswordc(e.target.value);
        if (e.target.value.length == 0) {
            setPasswordcError("");
        } else if (e.target.value != password) {
            setPasswordcError("Passwords must match");
        } else if (e.target.value == password) {
            setPasswordcError("");
        }
    }

    return(
        <div className={ styles.container }>
            <form action="">
                <div className={ styles.info }>
                    <label>First Name: </label>
                    <input type="text" onChange={ valFirstname } value={firstname} />
                </div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
                <div className={ styles.info }>
                    <label>Last Name: </label>
                    <input type="text" onChange={ valLastname } value={lastname} />
                </div>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
                <div className={ styles.info }>
                    <label>Email: </label>
                    <input type="text" onChange={ valEmail } value={email} />
                </div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                <div className={ styles.info }>
                    <label>Password: </label>
                    <input type="text" onChange={ valPassword } value={password} />
                </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                <div className={ styles.info }>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ valPasswordc } value={passwordc} />
                </div>
                {
                    passwordcError ?
                    <p style={{color:'red'}}>{ passwordcError }</p> :
                    ''
                }
            </form>
            <div className={ styles.output }>
                <p className={ styles.outputTitle }>Your Form Data</p>
                <table>
                    <tr>
                        <td className={ styles.label }>First Name</td>
                        <td>{firstname}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Last Name</td>
                        <td>{lastname}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Confirm Password</td>
                        <td>{passwordc}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}


export default Form;