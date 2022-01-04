import styled from 'styled-components';

interface Props {
	expanded: Boolean;
}

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	background-color: var(--primary);
	color: var(--secondary);
`

export const NavMenu = styled.nav`
	width: 100vw;
	justify-content: space-between;
	list-style-type: none;
	padding-inline-start: .5vw;
	padding-inline-end: .5vw;
`;

export const MenuItem = styled.li`
	max-height: 10vh;
	height: 80px;
	padding: 16px;
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
	width: 100%;
	display: flex;
  position: relative;
	flex-direction: column;
	padding: 0 3% 4rem;
	margin-left: 4.5rem;
	transition: 300ms ease-in-out;
	position: relative;
	z-index: 2;

	${p => p.expanded} {
		margin-left: 310px;
	}
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
