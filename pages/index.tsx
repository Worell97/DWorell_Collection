import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Content, Footer, Header, MenuItem, NavMenu } from './styles';
import Logo from '../assets/d-d-d-djessica_ALTA.svg'
import Image from 'next/image';
import SideBar from '../components/menu/menu';
import BurgerButton from '../components/burgerButton/burgerButton';
import ShoppingBag from '@mui/icons-material/ShoppingBag'

function HomePage() {
	const [open, setOpen] = useState(false);
	const items = [
		{
			name: 'kimonos',
			label: 'Kimonos',
			items: [
				{ name: 'kimonosCurtos', label: 'Kimonos Curtos' },
				{ name: 'kimonoMid', label: 'Kimonos Médios' },
			],
		},
		{ 
			name: 'calcas', 
			label: 'Calças',
			items:[
				{name: 'calcasPantalonas', label: 'Calças Pantalonas'}
			]
		},
		{ name: 'vestidos', label: 'Vestidos' },
		{ name: 'macacao', label: 'Macacão' },
		{ name: 'macaquinho', label: 'Macaquinhos' }
	]

	
	return (
		<div>
			<Header>
				<NavMenu>
					<MenuItem style={{ float: 'left'}}>
						<BurgerButton open={open} setOpen={setOpen} />
					</MenuItem>
					<Link href='/'>
						<MenuItem style={{ paddingTop: 0}} >
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
							<ShoppingBag/>
						</MenuItem>
					</Link>
				</NavMenu>
			</Header>
			<Container style={{ height: '80vh' }} fluid>
				<Row style={{ height: '100%' }}>
					<Col>
						<Content>
							Content
						</Content>
					</Col>
					<SideBar items={items} open={open} />
				</Row>
			</Container>
			<Footer>
				DWorell Collection &reg;
			</Footer>
		</div>
	)
}

export default HomePage;