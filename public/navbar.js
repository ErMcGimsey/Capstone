function NavBar(){

  return (
       
      <nav className="customNav navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
   
    <a className="navbar-brand navcolor" href="#">BadBank</a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link navcolor" aria-current="page" href="#/CreateAccount">Create Account</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link navcolor" href="#/login/">Login</a>
        </li>
    
    

        <li className="nav-item">
          <a className="nav-link navcolor" href="#/deposit/">Deposit</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link navcolor" href="#/withdraw/">Withdraw</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link navcolor" href="#/alldata/">AllData</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
}