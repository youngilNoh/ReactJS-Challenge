import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
	margin-top: 10px;
	padding: 0px 10px 10px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{topRated && topRated.length > 0 && (
				<Section title="Top Rated Shows">
					{topRated.map((tv) => (
						<Poster key={tv.id} id={tv.id} title={tv.original_name} imageUrl={tv.poster_path} rating={tv.vote_average} year={tv.first_air_date.substring(0, 4)} />
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Shows">
					{popular.map((tv) => (
						<Poster key={tv.id} id={tv.id} title={tv.original_name} imageUrl={tv.poster_path} rating={tv.vote_average} year={tv.first_air_date.substring(0, 4)} />
					))}
				</Section>
			)}
			{airingToday && airingToday.length > 0 && (
				<Section title="Airing Today">
					{airingToday.map((tv) => (
						<Poster key={tv.id} id={tv.id} title={tv.original_name} imageUrl={tv.poster_path} rating={tv.vote_average} year={tv.first_air_date.substring(0, 4)} />
					))}
				</Section>
			)}
			{error && <Message text={error} />}
		</Container>
	);

TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
