import { useState } from 'react';

export const useSayHello = () => {
	const [greeting, setGreeting] = useState<'Hello' | 'Bye'>('Hello');

	const sayHello = () => {
		alert(greeting);

		if (greeting === 'Hello') {
			setGreeting('Bye');
		} else {
			setGreeting('Hello');
		}
	};

	return sayHello;
};
