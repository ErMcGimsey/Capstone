function Login(){
    let {user, setUser } = React.useContext(UserContext)

    const [isLogged, setIsLogged]   = React.useState(false);
    const [status, setStatus]       = React.useState('')
    const [email, setEmail]         = React.useState('')
    const [password, setPassword]   = React.useState('')

    const firebaseConfig = {

        apiKey: "AIzaSyB8X4IdTzzTWVrN408oedLBRMslnBhRr28",
        authDomain: "capstone-37e12.firebaseapp.com",
        projectId: "capstone-37e12",
        storageBucket: "capstone-37e12.appspot.com",
        messagingSenderId: "501329039591",
        appId: "1:501329039591:web:8fbf63413c09190bbdd242"
    
    };

    // check if firebase is already initialized
     !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

     //set login status   
    firebase.auth().onAuthStateChanged((user) => {
        return user ? setIsLogged(true) : setIsLogged(false);
    });

    console.log(isLogged)


    // login
    function handleLogin () {
        

        const auth = firebase.auth()
        const promise = auth.signInWithEmailAndPassword(email, password)
        promise
        .catch(function (error) {
            console.log('failed')
            setStatus("Email or password is incorrect, Try again")
            return error
        })
        console.log(email, password)

        async function loadNames() {
            const response = await fetch('/account/all');
            const names = await response.json();
            const userObj = names.find((user) => user.email == email)
            console.log(userObj.name)
            setUser(userObj)
          }
          loadNames();

          
    
    }

 

    

/*    //get user token
    function getUserToken () {
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            //check if token was caught 
            console.log(idToken)
            //TODO: use token for authorization
          })
          
    } */

    


   // logout
   function handleLogout() {
    firebase.auth().signOut();
    console.log(`is logged out.`)
    setUser('')
   }

    return(
        <Card
        bgcolor="primary"
        maxWidth = "20rem"
        header="Login"
        status = {status}
        body={ !isLogged ? (
            <>
            Email Address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.currentTarget.value)}}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.currentTarget.value)}} /><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin} >Login</button>
            </>
        ):(
            <>
            <button type="submit" className="btn btn-light" onClick={handleLogout} >Logout</button>
            </>
        )
        }
        />
    )

}