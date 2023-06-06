import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const info = {
    useremail: 'info@example.com',
    userpass: 'info2023',
}
const Login=()=>{
    const data = 'a'
    const inputRef = useRef();
    const inputtRef = useRef();
    const navigate = useNavigate();
    const loginn=()=>{
        if (inputRef.current.value === info.useremail && inputtRef.current.value === info.userpass) {
            navigate('/cart')
        }
    }
    const [login, setLogin]=useState({
            email: "",
            pass: "",
            lock: "fa-solid fa-lock",
            passwordT: "password",
            alertText: "",
            alertColor: ""
    })
    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(login)
        if (!login.email || !login.pass) {
         setLogin({
           ...login,
           alertColor: "alert-warning",
           alertText: "Please, fill this area",
         });
        } 
        else {
          if (login.email === info.useremail && login.pass === info.userpass) {
            setLogin({
              ...login,
              alertColor: "alert-success",
              alertText: "login successfull",
            });
          } else {
          setLogin({
            ...login,
            alertColor: "alert-danger",
            alertText: "password or email is wrong!",
          });
          }
        }
      };
      const changeicon = e => {
        e.preventDefault();
        if (login.lock === "fa-solid fa-lock") {
            setLogin({
                ...login,
                passwordT: "password",
                lock: "fa-solid fa-lock-open",
            })
        } else {
            setLogin({
                ...login,
                lock: "fa-solid fa-lock",
                passwordT: "text"
            })
        }
    }
    
    return(
    <>
        <div className="container mt-5 loginpage">
                <div className='mainDiv'>
                    <h1>Login</h1>
                    <br />
                    <div className='alert'><h5 className={`alert ${login.alertColor}`}>{login.alertText}</h5></div>
                    <div>
                        <form onSubmit={loginSubmit}>
                            <div className="mb-3">
                                <p>Username or email address <span style={{color:'red'}}>*</span></p>
                                <div className="d-flex">
                                <input   ref={inputRef} onChange={e => {
                                    setLogin({ 
                                        ...login,
                                        email: e.target.value })
                                }} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email ID' />
                                <i class="fa-solid fa-envelope mt-2 ms-2"></i>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p>Password <span style={{color:'red'}}>*</span></p>
                                <input  ref={inputtRef} onChange={e => {
                                    setLogin({ 
                                        ...login,
                                        pass: e.target.value })
                                }} type={login.passwordT} id="exampleInputPassword1" placeholder='Password' />
                                <button type="button"onClick={changeicon} style={{'border':'none','background':'none'}} className='p-0 ms-2'><i class={login.lock}></i></button>
                            </div>
                            <div className="mb-3 d-flex">
                                <button type="submit" className="form-control" id="button2" onClick={loginn}>Login</button>
                                <div className="mt-2 form-check">
                                <input type="checkbox" className="form-check-input ms-5" id="exampleCheck1" />
                                <label className="form-check-label ms-1" style={{ 'font-size': '12px' }} htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
    </>
    
    );
}
export default Login


