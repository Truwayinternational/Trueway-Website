import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminContext } from './AdminContext';



function AdminAuth() {
    const navigate = useNavigate();
    const {admin} = useContext(AdminContext);
    if(admin){
        return <Outlet />
    }else{
        navigate('/admin');
    }
}

export default AdminAuth

