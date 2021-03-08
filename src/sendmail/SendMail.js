import React from 'react'
import styles from './styles.module.scss'
import {Close} from "@material-ui/icons"
import { Button } from '@material-ui/core'
import {useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'


export default function SendMail() {
    const {register, handleSubmit, watch, errors}=useForm()
    const dispatch=useDispatch()
    const onSubmit=(data)=>{
        console.log("submit", data)
    }
    return (
        <div className={styles.sendMail}>
            <div className={styles.sendMailHeader}>
                <h3>New Message</h3>
                <Close className={styles.closeIcon} onClick={()=>{dispatch(closeSendMessage())}}/>
            </div>
           < div className={styles.sendMailBody}>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" name="to" placeholder="To"  className={styles.to} ref={register({required:true})}/>{errors.to && <p className={styles.error}>To required</p>}
                    <input name="subject" placeholder="Subject" type="text" className={styles.subject} ref={register({required:true})}/>{errors.subject && <p className={styles.error}>Subject required</p>}
                    <input name="message" placeholder="Message..." type="text" className={styles.message} ref={register({required:true})}/>{errors.message && <p className={styles.error}>Please enter message required</p>}
                    < div className={styles.sendMailOptions}>
                        <Button 
                        color="primary" 
                        variant="contained"
                        type="submit"
                        className={styles.buttonSend} onClick={()=>{}} >Send</Button>
                        </div>  
               </form>
               </div>
        </div>
    )
}
