import AdminLoginForm from "./AdminLoginForm"
import Header from "../AdminHeader/AdminHeader"

export default function AdminLoginPage() {
    return (
        <>
            //Civicly logo goes here
            <Header />
            <AdminLoginForm />
            <h3>Are we still thinking we want the 'forgot password' link here?</h3>
        </>
        
    )
}