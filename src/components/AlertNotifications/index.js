// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Alert Notifications</h1>
        <Notification>
          <div className="each-container">
            <div className="status">
              <AiFillCheckCircle className="success" />
              <h1 className="success">Success</h1>
            </div>
            <p className="para">You can access all the files in the folder</p>
          </div>
        </Notification>
        <Notification>
          <div className="each-container">
            <div className="status">
              <RiErrorWarningFill className="error" />
              <h1 className="error">Error</h1>
            </div>
            <p className="para">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <div className="each-container">
            <div className="status">
              <MdWarning className="warning" />
              <h1 className="warning">Warning</h1>
            </div>
            <p className="para">
              viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <div className="each-container">
            <div className="status">
              <MdInfo className="info" />
              <h1 className="info">Info</h1>
            </div>
            <p className="para">Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
