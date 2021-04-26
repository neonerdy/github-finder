import React from 'react'

const Alert = ({ msg }) => {
    return (
        msg !== '' && (
            <div className={`alert alert-light`}>
                <i className="fas fa-info-circle"/> {msg}
            </div>
        )    
    )
}

export default Alert;
