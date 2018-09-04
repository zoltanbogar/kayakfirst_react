import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
				</li>
			)
		});

	return (
		<Auxiliary>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.price}</strong></p>
			<p>Continue to Checkout?</p>
			<Button clicked={props.purchaseCancelled} btnType={"Danger"}>CANCEL</Button>
			<Button clicked={props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
		</Auxiliary>
	)
};

export default orderSummary;