import styled from 'styled-components';

interface Props {
	expanded: Boolean;
}

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	background-color: var(--pink);
	color: var(--primary);
`

export const NavMenu = styled.nav`
	max-height: 10vh;
	width: 100vw;
	list-style-type: none;
	padding-inline-start: .5vw;
	padding-inline-end: .5vw;
`;

export const MenuItem = styled.li`
	padding-top: 25px;
	padding-left: 20px;
	max-height: 10vh;
	height: 80px;
	align-items: center;
	justify-content: center;
	text-align: center;
	float: right;
	text-decoration: none;
	cursor: pointer;
	a:hover{
		background-color: var(--secondary) solid;
	}
`;

export const Content = styled.div <Props>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

`;

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0;
	height: 10vh;
	background-color: var(--primary);
	color: var(--secondary);
`;
