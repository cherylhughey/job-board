import { connect } from 'react-redux'
import Job from '../components/Job'

const mapStateToProps = state => ({
  jobs: state.jobs
})

export const JobContainer = connect(mapStateToProps)(Job)
