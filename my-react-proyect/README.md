# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# newReactProject

## Pre primer paso

- Instalar sourcetree
- Conectar el repositorio a sourcetree

## Primer paso

- Instalar redux
- Setear redux con un store (elegi vos como queres que sea el objeto) que este implementado con redux toolkit
- Setear un reducer y un action para ese reducer
- Leer la documentacion de redux para hacer tus custom hooks de useSelector y useDispatch sean tipados

(para hacer el tema de integracion con typescript https://redux.js.org/tutorials/typescript-quick-start)

## Segundo paso

- Crea tu pagina main, implementando el provider con el store
- Crea un componente boton, que al clickearlo, cambie tu estado de redux de true a false
- Resetea el estado de redux a null si el componente se desrenderiza
- Haceme un test con almenos 1 caso de test, del componente con jest (recomiendo usar react testing library)

## Tercer paso

- Crea un sistema de rutas para tu aplicacion con react router dom
