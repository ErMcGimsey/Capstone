function Balance(){
    let {user, setUser } = React.useContext(UserContext)
        const [total, setTotal] = React.useState(0)
        

        console.log(total)

        return(
            <Card
            bgcolor="primary"
            maxWidth = "20rem"
            header="Balance"
            body={
                <h3>balance goes here</h3>
            }
           />

            
        
        )
    };
    

