import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname },
		} = props;
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/'),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
			location: { pathname },
		} = this.props;
		const { isMovie } = this.state;
		const parseId = parseInt(id);
		if (isNaN(parseId)) {
			return push('/');
		}
		let result = null;
		try {
			if (isMovie) {
				({ data: result } = await moviesApi.movieDetail(parseId));
			} else {
				({ data: result } = await tvApi.showDetail(parseId));
			}
			console.log(result);
		} catch {
			this.setState({ error: "Can't find anything." });
		} finally {
			this.setState({
				loading: false,
				result,
			});
		}
	}

	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
