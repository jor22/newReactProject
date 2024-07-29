import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layouts/App/App.tsx';
import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>
);
