import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Editor from './components/Editor';
import Result from './components/Result';
import HiddenEditors from './components/HiddenEditors';

const isMobile = window.innerWidth < 601;
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
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

function App() {
	const [html, setHTML] = useState('');
	const [css, setCSS] = useState('');
	const [js, setJS] = useState('');
	const [srcDoc, setSrcDoc] = useState('');
	const [hidden, setHidden] = useState(isMobile ? ['CSS', 'JS'] : []);

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
		console.log({ hidden });
	}, [hidden]);
	return (
		<Container>
			<Editors>
				<Editor
					code={html}
					mode="xml"
					title="HTML"
					isMobile={isMobile}
					handleChange={setHTML}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<Editor
					code={css}
					mode="css"
					title="CSS"
					isMobile={isMobile}
					handleChange={setCSS}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<Editor
					code={js}
					mode="javascript"
					title="JS"
					isMobile={isMobile}
					handleChange={setJS}
					hidden={hidden}
					handleClose={(val) => setHidden(val)}
				/>
				<HiddenEditors
					hidden={hidden}
					isMobile={isMobile}
					handleOpen={(val) => setHidden(val)}
				/>
			</Editors>
			<Result srcDoc={srcDoc} />
		</Container>
	);
}

export default App;
