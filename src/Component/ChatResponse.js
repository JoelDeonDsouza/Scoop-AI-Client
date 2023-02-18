import React from 'react'
import styles from "../App.css"

const ChatResponse = ({ message }) => {
    return (
        <div className="response-massage">
            <div className="response-massage-center">
                <div className="avatar">
                </div>
                <div className="message">
                    Hello World
                </div>
            </div>
        </div>
    )
}

export default ChatResponse
