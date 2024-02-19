import './App.css';
import { Home } from './pages/Home';
import { register } from 'swiper/element/bundle';

register();

function App() {
	return (
		<div className='flex items-center justify-center h-screen overflow-hidden'>
			<Home />
		</div>
	);
}

export default App;
