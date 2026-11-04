import authslice from './authslice'
import {configureStore} from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        auth:authslice
    }
})

export default store