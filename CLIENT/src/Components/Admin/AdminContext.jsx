import { createContext, useEffect, useMemo, useState } from "react";
import { userInstance } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";


export const AdminContext = createContext({});

export function AdminContextProvider({children}){
    const navigate = useNavigate()
    const [admin,setAdmin] = useState(null);
    
    useEffect(()=>{
        async function fetchAdmin(){
            try {
                const {data} = await userInstance.get("/verify");
                if(!data.success) {
                    localStorage.removeItem("token");
                    setAdmin(null)
                    navigate('/admin')
                }else{
                    localStorage.setItem('token', data.token);
                    setAdmin({id:data.id, email:data.email});
                }
            } catch (error) {
                // console.error(error);
            }
        }
        if(!admin){
            fetchAdmin()
        }
    },[admin, navigate])

    const adminMemo = useMemo(()=>({admin,setAdmin}),[admin,setAdmin])
    return (
        <AdminContext.Provider value={adminMemo}>
            {children}
        </AdminContext.Provider>
    )
 }