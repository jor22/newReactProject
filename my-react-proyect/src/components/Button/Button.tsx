import { FC } from 'react';
import { useSayHello } from './Hooks/useSayHello';

type Props = {
	text?: string;
};

export const Button: FC<Props> = ({ text }) => {
	const sayHello = useSayHello();

	return (
		<button onClick={sayHello}>
			<span>{text}</span>
		</button>
	);
};

Button.defaultProps = {
	text: 'Button',
};
