import React from 'react'
import { connect } from 'react-redux'
import { acquireName } from '../actions'

let name = ''

class Hello extends React.Component {
  render () {
    return (
      <>
        { this.props.name
          ? null
          : <div className="hello-container">
            <div>
              <div className="intro">
                <p className="intro-message">UP FOR A <br/>ROADIE?</p>
              </div>
              <div className="name-q">
                <h3>WHAT&apos;S YOUR NAME?</h3>
              </div>
              <div className="form-container">
                <div className="form__group">
                  <input type="text" className="form__input" id="name" placeholder="Your name" required=""
                    onChange={(event) => (name = event.target.value)}
                  />
                </div>
                <span className="fas fa-arrow-circle-right" onClick={() => this.props.dispatch(acquireName(name))}></span>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps)(Hello)
