import { useEffect } from "react"
import Article from "./Article"
import Loading from "./Loading"
// redux
import { fetchAllDogs } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"

const styles = {
	articles: {
		width: "80%",
		display: "flex",
		flexWrap: "wrap",
		rowGap: "4rem",
		gap: "3rem",
	},
};

export default function Articles() {
	const dispatch = useDispatch();
	const { dogs, loading } = useSelector((state) => state.dogs);

    useEffect(() => {
    	dispatch(fetchAllDogs());
	}, [dispatch]);

	return (
		<>
			{ loading ? <Loading /> : ""}
            <div style={styles.articles}>

                {!dogs ? (

                    <h1>vacio</h1>

				) : (

                    dogs.map((dog, i) => {
						if (i < 98) return <Article key={dog.id} {...dog} />;
                        else return false;
                    })

                )}

			</div>
		</>
	);
}
