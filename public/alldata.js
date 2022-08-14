function AllData(){
    let {user, setUser } = React.useContext(UserContext)

  console.log(user)
   
    
    return (
    <div>
        <div>
            <Card
                bgcolor = "info"
                maxWidth = "30rem"
                header = "Info"
                body = {<>
                        <h4>{user.name}'s Data</h4>
                        <table>
                        <tr>
                            <td>Current Balance</td>
                            <td>{user.balance}</td>
                        </tr>
                        <tr>
                            <td>Total Deposits</td>
                            <td>{user.deposits}</td>
                            <td>{user.withdrawals}</td>
                        </tr>
                        <tr>
                            <td>Total Withdrawals</td>
                            <td>{user.withdrawls}</td>
                        </tr>
                        </table> 
                        </>
                }
            /> 
        </div>

         
    </div>  
    );

    
        
    


}

