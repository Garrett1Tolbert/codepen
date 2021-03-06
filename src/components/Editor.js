import React from 'react';
import styled from '@emotion/styled';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '../constants';

const Container = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 5px 15px #212121;
	display: ${({ open }) => (open ? 'block' : 'none')};
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

function Editor({
	code,
	mode,
	isMobile,
	title,
	hidden,
	handleChange,
	handleClose,
}) {
	const open = !hidden.includes(title);
	return (
		<Container open={open}>
			<Header>
				<Title>{title}</Title>
				<Icon
					className="material-icons"
					onClick={() => {
						if (isMobile) {
							if (title === 'HTML') handleClose(['HTML', 'JS']);
							else if (title === 'CSS') handleClose(['HTML', 'CSS']);
							else handleClose(['CSS', 'JS']);
						} else handleClose([...hidden, title]);
					}}
				>
					close_fullscreen
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
