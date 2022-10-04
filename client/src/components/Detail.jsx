import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import NavBar from "./NavBar"
import Loading from "./Loading"

// redux
import { useDispatch, useSelector } from "react-redux"
import { clearDetail, searchById } from "../redux/dogSlice"

const styles = {
	layout: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}

export default function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        dispatch(searchById(id))
        return () => {
            dispatch(clearDetail())
        };
    }, [dispatch, id]);

    const { detail: dog, loading } = useSelector((state) => state.dogs)

	return (
		<div>
			<NavBar />

			<div style={styles.layout}>
                {loading ? <Loading /> : ""}
                <h1>{dog.name}</h1>
                <button onClick={ () => history.push('/breeds') } > Return </button>
				<img alt={dog.name} src={dog.image} loading='lazy' />
			</div>
		</div>
	)
}
