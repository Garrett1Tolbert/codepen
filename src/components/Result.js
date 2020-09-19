import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	height: 100%;
	width: 100%;
`;
const Iframe = styled.iframe`
	height: 100%;
	width: 100%;
`;

function Result({ srcDoc }) {
	return (
		<Container>
			<Iframe frameBorder="0" srcDoc={srcDoc} sandbox="allow-scripts" />
		</Container>
	);
}

export default Result;
