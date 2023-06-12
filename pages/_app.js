import '@/styles/globals.css';
import SideMenu from '../components/SideMenu';

export default function App({ Component, pageProps }) {
	return (
		<SideMenu>
			<Component {...pageProps} />
		</SideMenu>
	);
}
