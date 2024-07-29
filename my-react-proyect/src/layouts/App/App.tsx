import { Button } from '../../components/Button/Button';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.container}>
			<Button text='Jorge' />
			<Button />
		</div>
	);
}

export default App;
