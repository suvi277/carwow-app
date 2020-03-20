import React from 'react';
import Aux from 'app/hoc/Aux';
import axios from 'axios';
import PageTitle from 'app/components/PageTitle/PageTitle';
import Loader from 'app/components/Loader/Loader';
import CarInfo from 'app/components/CarInfo/CarInfo';
import './CardDetail.scss';
import CarImage from 'app/components/CarImage/CarImage';
import SlideFromLeft from 'app/components/SlideFromLeft/SlideFromLeft';

class CarDetail extends React.Component {
	state = {
		isLoaded: false,
		model: {}
	};

	componentDidMount() {
		const { params } = this.props.match;

		axios.get(`https://warm-dawn-92320.herokuapp.com/model/${params.id}`).then((res) => {
			const model = res.data;
			this.setState({ model, isLoaded: true });
		});
	}

	render() {
		const { model } = this.state;
		return (
			<Aux>
				<section className="container">
					<PageTitle title="Card Detal Page" />
					{!this.state.isLoaded ? (
						<Loader />
					) : (
						<SlideFromLeft>
							<div className="row card-detail">
								<div className="col-md-5">
									<CarImage altText={model.make} imgSrc={model.img_url} />
								</div>
								<div className="col-md-7">
									<CarInfo {...model} />
								</div>
							</div>
						</SlideFromLeft>
					)}
				</section>
			</Aux>
		);
	}
}

export default CarDetail;
