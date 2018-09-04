import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component{
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	};

	render(){
		return (
			<div>
				<h4>Enter your contact data</h4>
				<form action="">
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="email" placeholder="Email" />
					<input type="text" name="street" placeholder="Street" />
					<input type="text" name="postal" placeholder="Postal code" />
					<Button>ORDER</Button>
				</form>
			</div>
		)
	}
}

export default ContactData;