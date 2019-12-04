import React from 'react';

const Check: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '24px' }) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={style} height={height} className='check-icon'>
		<path d='M9 16.17l10.6-10.6 1.4 1.4-12 12-5.58-5.56 1.4-1.4z' />
	</svg>
);
export default Check;
