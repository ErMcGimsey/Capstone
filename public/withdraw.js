function Withdraw(){
    let {user, setUser }                            = React.useContext(UserContext)
   
    const [show, setShow]                           = React.useState(true)
    const [balance, setBalance]                     = React.useState(user.balance)
    const [deposits, setDeposits]                   = React.useState(user.deposits)
    const [withdraw, setWithdraw]                   = React.useState(user.withdrawls);
    const [currentWithdraw, setCurrentWithdraw]     = React.useState('')
    const [status, setStatus]                       = React.useState('')
    const [validTransaction, setValidTransaction]   = React.useState(false)

    function handleCreate(){
        if(Number.isNaN(Number(currentWithdraw)) || (Number(currentWithdraw)) > Number(balance)) {
            return handleError()} 
        
        else {


        let total = Number(balance) + Number(currentWithdraw)
        let sumWithdraw = Number(withdraw) + Number(currentWithdraw)
        setWithdraw(sumWithdraw)
        setBalance(total)
        setShow(false)
        setValidTransaction(false)
        setStatus('');
        setDeposits(user.deposits)
        setUser(user => ({
            ...user,
            withdrawls: sumWithdraw,
            balance: total
        }))
        
        console.log(user)

    }};

    function handleChange(e){
        setCurrentWithdraw(e.currentTarget.value)
        setValidTransaction(true)
    }

    function handleError() {
        if(Number.isNaN(Number(currentWithdraw))){
            setStatus('The Deposit Entered Is Not A Number')
        }
        if ((Number(currentWithdraw)) > Number(balance)){
            setStatus('The Deposit Cannot Be A Negative Number')
        }
        setCurrentWithdraw('')
        setValidTransaction(false)
    }

    function clearForm() {
        setCurrentWithdraw('')
        setShow(true)
    }


    return(
        <Card
            bgcolor = "warning"
            maxWidth = "20rem"
            header = "Withdraw"
            status = {status}
            body = {show ? (
                <>
                
                Balance {balance}
                <br/>
                <input type="input" className="form-control" id="balance" placeholder="Enter Amount" onChange={handleChange}/>
                <button type="submit" className="btn btn-light"  disabled={!validTransaction} onClick={handleCreate}>Withdraw</button>
                <br/>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
                </>  
            )
            }


        />
    );
}