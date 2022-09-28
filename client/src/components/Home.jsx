import React from 'react'
import NavBar from './NavBar'
import Articles from './Articles'
import Paginator from './Paginator'
import Sorting from './Sorting'

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    }
}

export default function Home() {
    return (
			<>
                <NavBar />

                <Sorting />
				<section style={styles.layout}>

					<Articles />
					<Paginator />
				</section>
			</>
		);
}
