export const ADD_NAME = 'ADD_NAME'
export const RECEIVED_INFO = 'RECEIVED_INFO'
export const ADD_TRIP = 'ADD_TRIP'
export const TURN_OFF_WAIT = 'TURN_OFF_WAIT'

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name: name,
    waiting: true
  }
}

export const turnOffWait = () => {
  return {
    type: 'TURN_OFF_WAIT',
    waiting: false
  }
}

export const addTripRequest = (roadie) => {
  return {
    type: 'ADD_TRIP',
    roadie: roadie,
    waiting: true,
    name: null,
    tripstatus: true
  }
}

export function acquireName (name) {
  return (dispatch) => {
    dispatch(addName(name))
    setTimeout(() => {
      dispatch(turnOffWait())
    }, 3000)
  }
}

export function acquireTripDetails (startcity, endcity, daysaway) {
  return (dispatch) => {
    dispatch(addTripRequest([startcity, endcity, daysaway]))
    setTimeout(() => {
      dispatch(turnOffWait())
    }, 1000)
  }
}
