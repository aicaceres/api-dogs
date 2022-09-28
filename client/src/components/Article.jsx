import React from 'react'
import { Link } from 'react-router-dom';

export default function Article({ id, name, bredFor, temperament, image }) {

    const styles = {
    article: {

    },
    photo: {
        backgroundImage: 'url('+ image +')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '300px',
        height: '300px'
    }
}

    return (
			<article style={styles.article}>
				<div>
					<Link to="/detail">
						<div style={styles.photo}></div>

						<div>{name}</div>
					</Link>
                <div>{ bredFor }</div>
				</div>
			</article>
		);
}
