import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '../constants';

const Container = styled.div`
	// height: 100%;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 5px 15px #212121;
`;
const Header = styled.div`
	padding: 8px 16px;
	background: rgba(255, 255, 255, 0.6);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.p`
	font-size: 20px;
	font-weight: 600;
	color: #212121;
`;
const Icon = styled.i`
	cursor: pointer;
	color: #212121;
`;

function Editor({ code, mode, title, handleChange }) {
	const [open, setOpen] = useState(true);
	return (
		<Container>
			<Header>
				<Title>{title}</Title>
				<Icon className="material-icons" onClick={() => setOpen(!open)}>
					{open ? 'close_fullscreen' : 'open_in_full'}
				</Icon>
			</Header>
			<CodeMirror
				value={code}
				options={{
					lineNumbers: true,
					lineWrapping: true,
					theme: 'material',
					mode,
				}}
				onBeforeChange={(editor, data, value) => {
					handleChange(value);
				}}
				onChange={(editor, data, value) => handleChange(value)}
			/>
		</Container>
	);
}

export default Editor;
