import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 10px;
	max-height: 60%;
	overflow: scroll;
	display: flex;
	flex-direction: column;
`;

const YoutubeFrame = styled.div`
	margin-top: 20px;
`;

const YoutubePresenter = ({ videos }) => (
	<Container>
		{videos &&
			videos.length > 0 &&
			videos.map((video) => (
				<YoutubeFrame key={video.id}>
					<iframe
						title={video.name}
						width="400"
						height="225"
						src={`https://www.youtube.com/embed/${video.key}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</YoutubeFrame>
			))}
	</Container>
);

YoutubePresenter.propTypes = {
	videos: PropTypes.array.isRequired,
};

export default YoutubePresenter;
