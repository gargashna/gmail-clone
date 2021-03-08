import React from 'react'
import styles from "./header.module.scss"
import MenuIcon from "@material-ui/icons/Menu"
import {Avatar,IconButton} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import  ArrowDropDownIcon  from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src={process.env.PUBLIC_URL+"/newgmaillogo.png"} alt="gmail"/>

                

            </div>
            <div className={styles.headerMiddle}>
                <SearchIcon style={{color:"grey"}}/>
                <input placeholder="Search email" type="text"/>
                
                <ArrowDropDownIcon/>

            </div>
            <div className={styles.headerRight}>
            <IconButton>
            <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>
            </div>
            
            
        </div>
    )
}
