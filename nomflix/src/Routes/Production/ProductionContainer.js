import React from 'react';
import ProductionPresenter from './ProductionPresenter';

export default class ProductionContainer extends React.Component {
	constructor(props) {
		super(props);
		const { companies, countries } = props;
		this.state = {
			companies: companies,
			countries: countries,
		};
	}

	render() {
		const { companies, countries } = this.state;
		return <ProductionPresenter companies={companies} countries={countries} />;
	}
}
