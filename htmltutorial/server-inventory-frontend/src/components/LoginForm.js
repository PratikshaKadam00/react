import "../css/LoginForm.css"

function LoginForm({isOpen, onClose,onSubmit})
{
    if(!isOpen)
    {
        return null;
    }
   
   const handleLoginSubmit = (e) =>{
    e.preventDefault();
    const username=e.target.username.value;
    const password = e.target.password.value;
    let role=null;

    if(username === 'admin' && password === 'admin123'){
        role='admin';
    }else if(username==='user' && password==='user123'){
        role='user';
    }

    onSubmit({username, role});
    onClose();

   }

    return(<div className="modal-overlay">
        <div className="modal-content">
            <span className="close-button" onClick={onClose}>&times;</span>
            <h2>Login</h2>
            <form
            onSubmit={handleLoginSubmit}>
            <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
           </div>
           <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
           </div>
           <button type="submit">Submit</button>  
            </form>
        </div>
    </div>);
}
export default LoginForm;