import React from 'react';
import Home from './component/home/home';

import styles from './main.scss';

function Main() {
	return (
		<div className={styles['container']}>
			<Home />
		</div>
	);
}

export default Main;