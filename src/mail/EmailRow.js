import React from 'react'
import styles from './mail.module.scss'
import cx from "classnames"
import {Checkbox, IconButton } from '@material-ui/core'
import {StarBorderOutlined,LabelImportantOutlined} from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
export default function EmailRow({id, title, subject, message, time}) {
    const history=useHistory()
    return (
        <div onClick={()=>history.push("/mail")} className={styles.emailRow}>
            <div className={styles.emailRowOptions}>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
             <h4>{subject}
             <span>{message}</span>
             </h4>   
            </div>
            <div className={styles.time}>
                {time}
            </div>
        </div>
    )
}
