import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 12px 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 24px;
	user-select: none;
`;
const Chip = styled.div`
	padding: 6px 12px;
	background: rgba(0, 0, 0, 75);
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	width: 100px;
	color: #fff;
	margin-right: 16px;
	cursor: pointer;
`;
const Icon = styled.i`
	color: #fff;
	font-size: 16px;
`;

function HiddenEditors({ hidden, handleOpen, isMobile }) {
	return (
		<Container>
			{hidden.map((title, idx) => (
				<Chip
					key={idx}
					onClick={() => {
						if (isMobile) {
							handleOpen(
								['HTML', 'CSS', 'JS'].filter((item) => item !== title)
							);
						} else handleOpen(hidden.filter((item) => item !== title));
					}}
				>
					{title}
					<Icon className="material-icons">open_in_full</Icon>
				</Chip>
			))}
		</Container>
	);
}

export default HiddenEditors;
