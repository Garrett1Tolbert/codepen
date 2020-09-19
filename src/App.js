import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Editor from './components/Editor';
import Result from './components/Result';
import HiddenEditors from './components/HiddenEditors';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr 1fr;
	overflow: hidden;
	transition: all 0.3s;
`;
const Editors = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
	gap: 16px;
	align-items: center;
	background: #424242;
	width: 100%;
	padding: 24px;
	padding-bottom: 64px;
	position: relative;
`;

function App() {
	const [html, setHTML] = useState('');
	const [css, setCSS] = useState('');
	const [js, setJS] = useState('');
	const [srcDoc, setSrcDoc] = useState('');
	const [hidden, setHidden] = useState([]);

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
				<Editor
					code={html}
					mode="xml"
					title="HTML"
					handleChange={setHTML}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<Editor
					code={css}
					mode="css"
					title="CSS"
					handleChange={setCSS}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<Editor
					code={js}
					mode="javascript"
					title="JS"
					handleChange={setJS}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<HiddenEditors hidden={hidden} handleOpen={(val) => setHidden(val)} />
			</Editors>
			<Result srcDoc={srcDoc} />
		</Container>
	);
}

export default App;
