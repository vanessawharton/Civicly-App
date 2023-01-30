import AdminLoginForm from "./AdminLoginForm"


export default function AdminLoginPage() {
    return (
        <>
            //Civicly logo goes here
            <h1 className="admin-login">Admin Log In </h1>
            <AdminLoginForm />
            <h3>Are we still thinking we want the 'forgot password' link here?</h3>
        </>
        
    )
}