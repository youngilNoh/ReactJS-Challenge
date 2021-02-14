import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const DetailHeader = styled.header`
	color: white;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	z-index: 10;
	margin-top: 30px;
`;
const List = styled.ul`
	display: flex;
`;

const Item = styled.li`
	width: 150px;
	height: 50px;
	text-align: center;
	background-color: rgba(20, 20, 20, 0.8);
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
	border-bottom: 3px solid ${(props) => (props.current ? '#0984e3' : 'transparent')};
	transition: border-bottom 0.5s ease-in-out;
	margin-right: 20px;
`;
const SLink = styled(Link)`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default withRouter(({ isMovie, location: { pathname }, match: { url } }) => {
	return (
		<DetailHeader>
			<List>
				<Item current={pathname === `${url}/youtube`}>
					<SLink to={`${url}/youtube`}>Youtube Videos</SLink>
				</Item>
				<Item current={pathname === `${url}/production`}>
					<SLink to={`${url}/production`}>Production</SLink>
				</Item>
				{isMovie ? (
					''
				) : (
					<Item current={pathname === `${url}/seasons`}>
						<SLink to={`${url}/seasons`}>Seasons</SLink>
					</Item>
				)}
			</List>
		</DetailHeader>
	);
});
