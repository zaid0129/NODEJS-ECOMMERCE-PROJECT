import '../css/AdminLogin.css'

let AdminLogin=()=>{
    return(
        <>
        <div className="admin-login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form className="login-form">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
        
        </>
    )
}

export default AdminLogin;