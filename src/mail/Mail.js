import { IconButton } from '@material-ui/core'
import { Delete, Email, MoreVert,CheckCircle, UnfoldMore,WatchLater,Error, LabelImportant, MoveToInbox, ArrowBack, Print, ExitToApp } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './mail.module.scss'

export default function Mail() {
    const history=useHistory()
    return (
        <div className={styles.mail}>
            <div className={styles.tools}>
             <div className={styles.mailToolsLeft}>
             <IconButton>
                    <ArrowBack onClick={()=>history.push("/")}/>
                 </IconButton>
             <IconButton>
                    <MoveToInbox/>
                 </IconButton>
                 
                 <IconButton>
                    <Error/>
                 </IconButton>
                 <IconButton>
                    <Delete/>
                 </IconButton>
                 <IconButton>
                    <Email/>
                 </IconButton>
                 <IconButton>
                    <WatchLater/>
                 </IconButton>
                 <IconButton>
                    <CheckCircle/>
                 </IconButton>
                 <IconButton>
                    <LabelImportant/>
                 </IconButton>
                 <IconButton>
                    <MoreVert/>
                 </IconButton>
            
            </div>
            <div className={styles.mailToolsMiddle}>
            <IconButton>
                 <UnfoldMore/>
                 </IconButton>
                 <IconButton>
                    <Print/>
                 </IconButton>
                 <IconButton>
                    <ExitToApp/>
                 </IconButton>
            
            </div>
           
            </div>
            <div className={styles.mailBody}>
            <div className={styles.mailBodyHeader}>
                <h2>Subject</h2>
                <IconButton>
                    <LabelImportant style={{color:"#e8ab02"}}/>
                </IconButton>
                <p>Title</p>
                <p className={styles.mailTime}>10pm</p>
                </div>
            
            <div className={styles.mailMessage}>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            </div>
           
        </div>
    )
}
