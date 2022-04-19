import { h } from 'preact';
import Styles from './styles.module.scss';

function Button({ children }) {
	return <span className={Styles.button}>
		{children}
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</span>;
}

export default Button;
