import React from 'react'

function Alert({alert}) {
    return (
        <div style={{height: "50px"}}>
            { alert && (
                <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
                    <strong> {alert.type}</strong>:{alert.msg}
                </div>
            )}
                </div>
    )
}

export default Alert
