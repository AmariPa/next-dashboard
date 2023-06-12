import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Chart from '../components/Chart';
import RecentOrders from '../components/RecentOrders';

export default function Home() {
	return (
		<>
			<Head>
				<title>Data Dashboard</title>
				<meta name='viewport' content='width=device-width, initial-scale=' />
			</Head>
			<main className='bg-gray-100 min-h-screen'>
				<Header />
				<Cards />
				<div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
					<Chart />
					<RecentOrders />
				</div>
			</main>
		</>
	);
}
