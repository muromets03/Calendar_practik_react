import React from 'react';

import Calendar from './components/Calendar';
import './index.css';


export default class App extends React.Component {
	state = {
		date: null
	};

	handleDateChange = date => this.setState({ date });

	render() {
		const { date } = this.state;
        const options ={weekday:'long',day:'numeric'}
		return (
			<div className='main'>
				{ date&&<p className='date'>{date.toLocaleDateString("en-Gb",options)}</p>}

				<Calendar
					onChange={this.handleDateChange}
				
					
				/>
			</div>
		);
	}
}