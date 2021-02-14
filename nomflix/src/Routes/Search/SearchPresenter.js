import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
	margin-top: 10px;
	padding: 0px 10px 10px 10px;
`;

const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;

const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
	<>
		<Helmet>
			<title>Search | Nomflix</title>
		</Helmet>
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
			</Form>
			{loading ? (
				<Loader />
			) : (
				<>
					{movieResults && movieResults.length > 0 && (
						<Section title="Movie Results">
							{movieResults.map((movie) => (
								<Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} year={movie.release_date.substring(0, 4)} />
							))}
						</Section>
					)}
					{tvResults && tvResults.length > 0 && (
						<Section title="TV Results">
							{tvResults.map((tv) => (
								<Poster key={tv.id} id={tv.id} title={tv.original_name} imageUrl={tv.poster_path} rating={tv.vote_average} year={tv.first_air_date && tv.first_air_date.substring(0, 4)} />
							))}
						</Section>
					)}
				</>
			)}
			{error && <Message text={error} />}
			{tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message text="Nothing found" />}
		</Container>
	</>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
