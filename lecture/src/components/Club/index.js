import React from 'react'

const Club = ({closeModal, club}) => {
	<section>
		<div className="button-wrapper">
			<button onClick={closeModal} className="button-right">
				Close
			</button>
		</div>

		<div className="header-wrapper">
			<h1 className="header">{club.name}</h1>
		</div>

		<p>Current Standing: {club.standing}</p>
	</section>
}

export default Club