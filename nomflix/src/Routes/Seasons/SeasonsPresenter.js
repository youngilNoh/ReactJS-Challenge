import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

const SeasonsFrame = styled.div`
	margin-top: 20px;
	overflow: scroll;
	display: flex;
	flex-wrap: nowrap;
`;

const Img = styled.img`
	margin-right: 20px;
`;

const SeasonsPresenter = ({ seasons }) => (
	<Container>
		<SeasonsFrame>
			{seasons && seasons.length > 0 && seasons.map((season) => (season.poster_path ? <Img key={season.id} src={`https://image.tmdb.org/t/p/w300${season.poster_path}`} /> : season.name))}
		</SeasonsFrame>
	</Container>
);

SeasonsPresenter.propTypes = {
	seasons: PropTypes.array.isRequired,
};

export default SeasonsPresenter;
