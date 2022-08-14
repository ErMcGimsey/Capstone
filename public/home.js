function Home(){
    let {user, setUser } = React.useContext(UserContext)
    return (
       <Card
            bgcolor="info"
            maxWidth = "20rem"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive Image"/>)}
       />
    )
}