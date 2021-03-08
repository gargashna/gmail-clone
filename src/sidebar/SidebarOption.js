import React from 'react'
import styles from './sidebar.module.scss'
import {InboxIcon} from "@material-ui/icons/Inbox"
import cx from "classnames"

export default function SidebarOption({Icon, title, number, selected}) {
    return (
        <div className={cx(styles.sidebarOption, {[styles["sidebarActive"]]:selected} ) }>
            <Icon style={{padding:"5px"}}/>
            <h3>{title}</h3>
            <p>{number}</p>
            
        </div>
    )
}
