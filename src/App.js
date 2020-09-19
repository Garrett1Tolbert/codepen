import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Editor from './components/Editor';
import Result from './components/Result';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr 1fr;
`;
const Editors = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #424242;
	width: 100%;
`;

function App() {
	const [html, setHTML] = useState('');
	const [css, setCSS] = useState('');
	const [js, setJS] = useState('');
	const [srcDoc, setSrcDoc] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
      <html lang='en'>
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
      </html>
      `);
		}, 250);
		return () => clearTimeout(timeout);
	}, [html, css, js]);
	useEffect(() => {
		console.log(srcDoc);
	}, [srcDoc]);
	return (
		<Container>
			<Editors>
				<Editor code={html} mode="xml" title="HTML" handleChange={setHTML} />
				<Editor code={css} mode="css" title="CSS" handleChange={setCSS} />
				<Editor code={js} mode="javascript" title="JS" handleChange={setJS} />
			</Editors>
			<Result srcDoc={srcDoc} />
		</Container>
	);
}

export default App;
