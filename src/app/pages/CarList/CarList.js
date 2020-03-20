import React from 'react';
import Aux from 'app/hoc/Aux';
import axios from 'axios';
import CarCard from '../../components/CarCard/CarCard';
import './CarList.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import Loader from '../../components/Loader/Loader';

class CarList extends React.Component {
	state = {
		isLoaded: false,
		models: []
	};

	componentDidMount() {
		axios.get(`https://warm-dawn-92320.herokuapp.com/models`).then((res) => {
			const models = res.data;
			this.setState({ models, isLoaded: true });
		});
	}

	render() {
		return (
			<Aux>
				<section className="container">
					<PageTitle title="Car Listing Page" />
					{!this.state.isLoaded ? (
						<Loader />
					) : (
						<ul className="car-list-wrapper d-flex flex-wrap">
							{this.state.models.map((model) => <CarCard {...model} />)}
						</ul>
					)}
				</section>
			</Aux>
		);
	}
}

export default CarList;
