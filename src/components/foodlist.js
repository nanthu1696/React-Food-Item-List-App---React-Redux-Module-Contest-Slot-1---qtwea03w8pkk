import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
	const [foods, setFoods] = useState([]);
	const [itemName, setItemName] = useState("");
	const [foodType, setFoodType] = useState("");
	const [spicinessLevel, setSpicinessLevel] = useState("");
	const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
	const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
	const [isFormEnabled, setIsFormEnabled] = useState(false);
	const [style , setStyle] = useState({"opacity" : 0.5});

	function handleSubmit(){
		let obj = { "id" : foods.length+1 ,"itemName": itemName , "foodType" :foodType , "spicinessLevel" :spicinessLevel };
		setFoods([...foods , obj]);
		setIsFormEnabled(false);
	}
	function handleDelete(item){
		let arr = foods.filter(obj => obj.id !== item.id);
		setFoods(arr);
	}
	function handleOpa(){
		setIsFormEnabled(true);
		let obj = {"opacity" :1};
		setStyle(obj);		
	}
	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick = {() => {setIsFirstCardEnabled(true) ; setIsSecondCardEnabled(true); }}>Add Food</button>

{ isFirstCardEnabled  && <div className="card-container">
                        <>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								disabled={!isFirstCardEnabled}
								value = {itemName} 
								onChange = {(e) => setItemName(e.target.value)}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								disabled={!isFirstCardEnabled}
								value = {foodType}
								onChange = {(e) => setFoodType(e.target.value)}
							/>
							<div className={`card`} onClick = {handleOpa} >
								<form style = {style}>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										disabled={!isFormEnabled}
										value = {spicinessLevel}
										onChange = {(e) => setSpicinessLevel(e.target.value)}
									/>
								</form>
							</div>
						</>
				</div>}
                <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
						<button onClick = {handleSubmit}>Save</button>
				</div>

				<ul className="list">
				{foods .map((item , index) => {
					return (
						<li>
							{item.itemName} ({item.foodType}) - Spiciness Level: {item.spicinessLevel}
							<button onClick = {() => handleDelete(item)}>Delete</button>
						</li>
					)
				})}
				</ul>
			</div>
		</>
	);
}

export default FoodList;
