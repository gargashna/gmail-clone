import React from 'react'
import styles from './mail.module.scss'
import cx from "classnames"

export default function Section({Icon, title, color, selected}) {
    return (
        <div className={cx(styles.section,{[styles["selected"]]:selected})}
        style={{
            borderBottom:`3px solid ${color}`,
            color:`${selected && color}`
        }}>
        <Icon/>
         <h4>{title}</h4>  
            

        </div>
    )
}
