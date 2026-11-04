import {react,useId} from 'react'
import useRef from 'react'
const rfe=useRef()
const id=useId()
const Input=()=>{
    function Input({label,type="text",name,className="",...props},rfe){
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    className={`border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                    {...props}
                    ref={rfe}
                />
            </div>
        )

    }
}
export default Input