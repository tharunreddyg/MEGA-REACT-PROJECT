import react from'react'
import {useDispatch} from 'react-redux'
import authslice from '../../store/authslice'
import auth from '../../appwrite/auth.js'

function Logout(){
    const dispatch=useDispatch()
    return (
        <button onClick={async()=>{
            await auth.logout()
            dispatch(authslice.actions.logout())
        }
        }>Logout</button>
    )
    
}