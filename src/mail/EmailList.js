import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import styles from './mail.module.scss'
import Section from './Section'
import EmailRow from './EmailRow'

export default function EmailList() {
    return (
        <div className={styles.emailList}>
            <div className={styles.settings}>
                <div className={styles.settingsLeft}>
                    <IconButton>
                    <Checkbox/>
                    </IconButton>
                    <IconButton><ArrowDropDown/></IconButton>
                    <IconButton><Redo/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                    
                </div>
                <div className={styles.settingsRight}>
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>  
            </div>
            <div className={styles.emailSection}>
                <Section Icon={Inbox} title="Primary" color="red" selected={true}/>
                <Section Icon={People} title="Social" color="blue" selected={false} />
                <Section Icon={LocalOffer} title="Promotions" color="yellow" selected={false}/>
            </div>

            <div className={styles.emailList}>
                <EmailRow 
                
                title="Twitch"
                subject="Hey Felow Streamer"
                message="You guys rock!" 
                time="10pm" />
                 <EmailRow 
                
                title="Twitch"
                subject="Hey Felow Streamer"
                message="You guys rock!" 
                time="10pm" />
                 <EmailRow 
                
                title="Twitch"
                subject="Hey Felow Streamer Hey Felow Streamer Hey Felow StreamerHey Felow Streamer"
                message="You guys rock!" 
                time="10pm" />
            </div>
        </div>
    )
}
