import { useEffect } from "react";
import "./SearchForm.css";
// redux
import { fetchAllTemperaments } from "../redux/temperamentSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
	const dispatch = useDispatch();
	const { temperaments } = useSelector((state) => state.temperaments);

	useEffect(() => {
		dispatch(fetchAllTemperaments());
	}, [dispatch]);

	return (
		<div className="search">
			<input
				type="text"
				className="search__input"
				placeholder="Search a breed..."
			/>
			<button className="search__button">
				<svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
					<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
				</svg>
			</button>

			<div className="search__select">
				<label>
					<select>
						<option> Select Temperament </option>
						{temperaments.map( t => (
							<option key={t.name} value={t.name}>{t.name}</option>
						))}
					</select>
				</label>
			</div>
		</div>
	);
}
