import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../index'

class JobHead extends Component {
  render() {
    const job = this.props.job
    const isUndisclosedSalary =
      job.salary_from === null ||
      job.salary_to === null ||
      job.salary_currency === null
    const salary = isUndisclosedSalary
      ? 'Undisclosed salary'
      : job.salary_from +
        ' - ' +
        job.salary_to +
        ' ' +
        job.salary_currency.toUpperCase()

    return (
      <div className='job-card row d-flex align-items-center justify-content-center'>
        <div className='col-sm-2 '>
          <Link
            className='d-flex align-items-center justify-content-center'
            to={job.company_url}
          >
            <img className='pt-2 pb-2' alt='' src={job.company_logo_url} />
          </Link>
        </div>
        <div className='col-sm-10'>
          <div className='row'>
            <div className='col-sm-7'>
              <h4>{job.title}</h4>
            </div>
            <div className='col-sm-5 text-right'>
              <h4>{salary}</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={job.company_url}
              >
                <h5>{job.company_name}</h5>
              </a>
            </div>
            <div className='col-sm-6 text-right'>
              <h5>{job.employment_type.toLowerCase()}</h5>
            </div>
          </div>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-sm-6'>
              <h6>{job.city + ', ' + job.street}</h6>
            </div>
            <div className='col-sm-6 text-right'>
              <Link to={PUBLIC_URL + '/#'}>
                Apply!
                <i className='far fa-envelope ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobHead
