import RC, { useState } from 'react';
import './login.css'



function google(){

}
function facebook(){

}
const Login = RC.FC = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handlesubmit = (e) =>{
      e.preventDefault();
      alert("Sucessfully logged in"+email+password);
    }

    return (
       <>
      <div className="login-cont">
        <div className="create-cont">
          <div className="create-title">Create an account</div>
          <button className="google-btn" onClick={google}>Google</button>
          <button className="facebook-btn" onClick={facebook}>Facebook</button>
        </div>

        <label className="or-label">Or</label>
        <form onSubmit={handlesubmit}>
        <div className="login-create-form">
          <div>Email <span>*</span></div>
          <input type="text" className="email-inpt" onChange={(e)=> setEmail(e.target.value)}/>

          <div>Password <span>*</span></div>
          <input type="password" className="password-inpt" onChange={(e)=>setPassword(e.target.value)}/>

          <buton className='login-btn' type='submit'>Login in</buton>
        </div>
        </form>
      </div>
    </>
    );
}
export default Login;