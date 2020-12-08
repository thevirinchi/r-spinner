import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Spinner = props => {
	return (
		(
			props.loadingState
				?
				<div style={styles.overlay}>
					<div style={styles.container}>
					<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
						<p>Loading...</p>
					</div>
				</div>
				:
				<div/>
		)
	)
}

const styles = {
	overlay: {zIndex: 2, position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'},
	container: {padding: '24px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa'}
}

export default Spinner