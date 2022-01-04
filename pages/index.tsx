import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Content, Footer, Header, MenuItem, NavMenu } from './styles';
import Logo from '../assets/d-d-d-djessica_ALTA.svg'
import Image from 'next/image';
import SideBar from '../components/sideBar/sideBar';

function HomePage() {
	const items = [
		{ name: 'home', label: 'Home' },
		{
			name: 'billing',
			label: 'Billing',
			items: [
				{ name: 'statements', label: 'Statements' },
				{ name: 'reports', label: 'Reports' },
			],
		},
		{
			name: 'settings',
			label: 'Settings',
			items: [
				{ name: 'profile', label: 'Profile' },
				{ name: 'insurance', label: 'Insurance' },
				{
					name: 'notifications',
					label: 'Notifications',
					items: [
						{ name: 'email', label: 'Email' },
						{
							name: 'desktop',
							label: 'Desktop',
							items: [
								{ name: 'schedule', label: 'Schedule' },
								{ name: 'frequency', label: 'Frequency' },
							],
						},
						{ name: 'sms', label: 'SMS' },
					],
				},
			],
		},
	]

	
	return (
		<div>
			<Header>
				<NavMenu>
					<Link href='/'>
						<MenuItem style={{ float: 'left', padding: 0 }}>
							<Image src={Logo} height={80} width={80} />
						</MenuItem>
					</Link>
					<Link href='/signin'>
						<MenuItem>
							Sign-in
						</MenuItem>
					</Link>
					<Link href='/cart'>
						<MenuItem>
							Cart
						</MenuItem>
					</Link>
				</NavMenu>
			</Header>
			<Container style={{ height: '80vh' }} fluid>
				<Row style={{ height: '100%' }}>
					<SideBar items={items} />
					<Content>
						Content
					</Content>
				</Row>
			</Container>
			<Footer>
				DWorell Collection &reg;
			</Footer>
		</div>
	)
}

export default HomePage;