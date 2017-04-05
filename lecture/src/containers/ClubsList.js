import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	orderByName,
	orderByStanding,
	selectClub,
	showClubs
} from '../core-module/actions'

 import App from '../components/App'

// mapStateToProps
const mapStateToProps = (state) => {
	let clubs = state.clubs.clubs

	return {
		clubs,
		showClubs: state.club.showClubs
		club: state.clubs.club
	}
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		orderByName,
		orderByStanding,
		selectClub,
		showClubs
	}, dispatch)
}

export default connect(maptStateToProps, mapDispatchToProps)(App)