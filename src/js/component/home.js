import React, { useState, isValidElement, useEffect } from "react";
import { ListarItems } from "./listar.js";
import { element } from "prop-types";

export function Home() {
	const [list, setList] = useState([]);
	const [showError, setShowError] = useState(false);

	const handleKeyPress = e => {
		if (e.target.value !== "" && e.charCode === 13) {
			console.log(e.target.value);

			let newToDo = {
				label: e.target.value,
				done: false
			};
			let newToDoList = [...list, newToDo];
			console.log(newToDoList);

			setList(newToDoList);
			e.target.value = "";
		}
	};

	const deleteId = numId => {
		let numArray = [];
		list.filter(function(element, i) {
			if (i !== numId) {
				numArray.push(element);
			}
			setList(numArray);
		});
	};

	return (
		<div className="text-center mt-5">
			<h1 id="text">Ingrese Tareas</h1>

			<div className="container" id="ingresar">
				<input
					id="input"
					type="text"
					placeholder="Ingresar"
					className="list-group-item mt-5"
					onKeyPress={handleKeyPress}
				/>
				{list.map((item, i) => {
					return (
						<ListarItems
							key={i}
							item={item.label} // Cambie solo esto aqui //
							idBorrar={i}
							deleteId={deleteId}
						/>
					);
				})}
				<p>{list.length} tareas agregadas</p>
				{showError ? <h1>Algo salió mal</h1> : null}
			</div>
		</div>
	);
}
