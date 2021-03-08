import React from 'react'
import styles from './sidebar.module.scss'
import AddIcon from "@material-ui/icons/Add"
import {Button, IconButton} from "@material-ui/core"
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import { LabelImportant, NearMe, Note, ExpandMore, Snooze, Duo, Person, Phone } from '@material-ui/icons'
import { openSendMessage } from '../features/mailSlice'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const dispatch=useDispatch()
    return (
        <div className={styles.sideBar}>
            <Button onClick={()=>dispatch(openSendMessage())} className={styles.compose} startIcon={<AddIcon fontSize="large" className={styles.addIcon}/>}>Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOption Icon={Snooze} title="Snoozed" number={54}/>
            <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
            <SidebarOption Icon={NearMe} title="Sent" number={54}/>
            <SidebarOption Icon={Note} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMore} title="More" number={54}/>
            <div className={styles.sideBarfooter}>
            <div className={styles.sideBarfooterIcons}>
                <IconButton><Person/></IconButton>
                <IconButton><Duo/></IconButton>
                <IconButton><Phone/></IconButton>
            </div>
            </div>


        </div>
    )
}
