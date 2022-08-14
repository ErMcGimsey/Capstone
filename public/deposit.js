

function Deposit(){
    let {user, setUser }                            = React.useContext(UserContext)
   
    const [show, setShow]                           = React.useState(true)
    const [balance, setBalance]                     = React.useState(user.balance)
    const [deposits, setDeposits]                   = React.useState(user.deposits);
    const [withdrawals, setWithdrawals]             = React.useState(user.withdrawals)
    const [status, setStatus]                       = React.useState('')  
    const [validTransaction, setValidTransaction]   = React.useState(false)
    const [currentDeposit, setCurrentDeposit]       = React.useState('')


    function handleCreate(){
        if(Number.isNaN(Number(currentDeposit)) || Math.sign(Number(currentDeposit)) == -1) {
            return handleError()} 
        
        else {


        let total = Number(balance) + Number(currentDeposit)
        let sumDeposits = Number(deposits) + Number(currentDeposit)
        setDeposits(sumDeposits)
        setBalance(total)
        setShow(false)
        setValidTransaction(false)
        setStatus('');
        setWithdrawals(user.withdrawls)
        setUser(user => ({
            ...user,
            deposits: sumDeposits,
            balance: total
        }))
        
        console.log(user)

    }};

    function handleChange(e){
        setCurrentDeposit(e.currentTarget.value)
        setValidTransaction(true)
    };

    function handleError() {
        if(Number.isNaN(Number(currentDeposit))){
            setStatus('The Deposit Entered Is Not A Number')
        }
        if (Math.sign(Number(currentDeposit)) == -1){
            setStatus('The Deposit Cannot Be A Negative Number')
        }
        setCurrentDeposit('')
        setValidTransaction(false)
    };

    function clearForm() {
        setCurrentDeposit('')
        setShow(true)
    };


    return(
        <Card
            bgcolor = "success"
            maxWidth = "20rem"
            header = "Deposit"
            status = {status}
            body = {show ? (
                <>
                
                Balance {balance}
                <br/>
                <input type="input" className="form-control" id="balance" placeholder="Enter Amount" value={currentDeposit} onChange={handleChange}/>
                <button type="submit" className="btn btn-light"  disabled={!validTransaction} onClick={handleCreate}>Deposit</button>
                <br/>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
                </>  
            )
            }


        />
    );
    
}