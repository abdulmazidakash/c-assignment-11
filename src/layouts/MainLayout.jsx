import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
	return (
		<div>
			{/* navbar  */}
			<Navbar></Navbar>
			{/* outlet  */}
			<div>
				<Outlet></Outlet>
			</div>
			{/* footer  */}
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;