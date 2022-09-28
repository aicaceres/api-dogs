import React from 'react'
import { Link } from 'react-router-dom'

const styles= {
    logo: {
        fontWeight: '400',
        fontSize: '1.5em',
        fontFamily: 'Lucida Sans',
    },
    link: {
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    }
}

export default function Logo() {
  return (
    <div style={ styles.logo } >
        <Link to="/breeds" style={styles.link}>
            <img
                alt="."
                src="/assets/logotemp.png"
                style={{ width: "100px" }}
            />
            <span>Dogs Breeds</span>
        </Link>
    </div>
  )
}
