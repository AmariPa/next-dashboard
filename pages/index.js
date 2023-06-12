import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import Cards from '../components/Cards';

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
			</main>
		</>
	);
}
