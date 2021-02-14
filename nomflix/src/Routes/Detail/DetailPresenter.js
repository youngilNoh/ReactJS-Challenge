import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import { Helmet } from 'react-helmet';
import DetailHeader from '../../Components/DetailHeader';
import { Route } from 'react-router-dom';
import Youtube from '../Youtube';
import Production from '../Production';
import Seasons from '../Seasons';

const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
`;

const Cover = styled.div`
	width: 30%;
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center center;
	height: 100%;
	border-radius: 10px;
	z-index: 0;
	box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.8);
`;

const Data = styled.div`
	width: 70%;
	margin-left: 40px;
`;

const Title = styled.h1`
	font-size: 32px;
	margin-bottom: 10px;
`;

const Item = styled.span``;

const ItemContainer = styled.div`
	margin-bottom: 30px;
`;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	font-size: 14px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
`;

const ImdbButton = styled.a`
	border: 2px solid #dddddd;
	padding: 4px;
	border-radius: 8px;
	background-color: rgba(0, 0, 0, 0.4);
	&:hover {
		filter: invert();
	}
`;

const DetailPresenter = ({ result, error, loading, isMovie }) =>
	loading ? (
		<>
			<Helmet>
				<title>Loading | Nomflix</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>{result.original_title ? result.original_title : result.original_name} | Nomflix</title>
			</Helmet>
			<Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Backdrop>
			<Content>
				<Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require('../../assets/noPosterSmall.png')}></Cover>
				<Data>
					<Title>{result.original_title ? result.original_title : result.original_name}</Title>
					<ItemContainer>
						<Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
						<Divider>•</Divider>
						<Item>{result.runtime > -1 ? result.runtime : result.episode_run_time[0]}</Item>
						<Divider>•</Divider>
						<Item>{result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))}</Item>
						{result.imdb_id && (
							<>
								<Divider>•</Divider>
								<ImdbButton href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
									IMDB →
								</ImdbButton>
							</>
						)}
					</ItemContainer>
					<Overview>{result.overview}</Overview>
					<DetailHeader isMovie={isMovie}></DetailHeader>
					<Route path="/:type/:id/youtube" render={() => <Youtube videos={result.videos.results} />} />
					<Route path="/:type/:id/production" render={() => <Production companies={result.production_companies} countries={result.production_countries} />} />
					<Route path="/tv/:id/seasons" render={() => <Seasons seasons={result.seasons} />} />
				</Data>
			</Content>

			{isMovie ? <></> : <></>}
		</Container>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
