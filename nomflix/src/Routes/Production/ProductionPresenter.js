import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 10px;
`;

const ProductionTitle = styled.h1`
	font-size: 15px;
	font-weight: bold;
	color: #636e72;
`;

const ProductionFrame = styled.div`
	margin-top: 20px;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-gap: 20px;
`;

const Item = styled.div`
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 100%;
`;

const ProductionPresenter = ({ companies, countries }) => (
	<Container>
		<ProductionTitle>Companies</ProductionTitle>
		<ProductionFrame>
			{companies &&
				companies.length > 0 &&
				companies.map((company) => <Item key={company.id}>{company.logo_path ? <Img src={`https://image.tmdb.org/t/p/w300${company.logo_path}`} /> : company.name}</Item>)}
		</ProductionFrame>
		<ProductionTitle>Countries</ProductionTitle>
		<ProductionFrame>{countries && countries.length > 0 && countries.map((country) => <Item key={country.id}>{country.name}</Item>)}</ProductionFrame>
	</Container>
);

ProductionPresenter.propTypes = {
	companies: PropTypes.array.isRequired,
	countries: PropTypes.array.isRequired,
};

export default ProductionPresenter;
