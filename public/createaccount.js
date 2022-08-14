function CreateAccount(){
   const [show,setShow] = React.useState(true);
   const [status, setStatus] = React.useState('');
   const [name, setName] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [validTransaction, setValidTransaction] = React.useState(false);

   // Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB8X4IdTzzTWVrN408oedLBRMslnBhRr28",
    authDomain: "capstone-37e12.firebaseapp.com",
    projectId: "capstone-37e12",
    storageBucket: "capstone-37e12.appspot.com",
    messagingSenderId: "501329039591",
    appId: "1:501329039591:web:8fbf63413c09190bbdd242"
  
  };
  
  
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

   function validate(field, label){
       if (!field) {
           setStatus('Error: Please provide ' + label);
           setTimeout(() => setStatus(''), 3000);
           return false;
       }
       return true;
   }

   function validatePass(isLong){
       if (isLong.length < 8) {
           setStatus('Password should be at least 8 characters')
           return false
       }
       return true;
   }

   function handleCreate(){
       console.log(name, email, password);
       if (!validate(name, 'name')) return;
       if (!validate(email, 'email')) return;
       if (!validate(password, 'password')) return;
       if (!validatePass(password)) return;

       const auth  = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email,password);
		promise.catch(e => {
            e.message ? setShow(true): setShow(false)
            setStatus(e.message)
            console.log(e.message)});

       const url = `/account/create/${name}/${email}/${password}`;
       
       (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
       })();
       
       setShow(false);
       setStatus('');
    }

   function clearForm(){
       setName('');
       setEmail('');
       setPassword('');
       setShow(true);
       setValidTransaction(false);
   }

   return(
       <Card
        bgcolor="primary"
        maxWidth = "20rem"
        header="Create Account"
        status={status}
        body={show ? (
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => {setName(e.currentTarget.value), setValidTransaction(true)}}/><br/>
            Email Address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => {setEmail(e.currentTarget.value), setValidTransaction(true)}}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" disabled={!validTransaction} onClick={handleCreate}>Create Account</button>

            </>
        ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
            </>
        )}
       />
   )
}