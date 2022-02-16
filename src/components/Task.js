import React from 'react';

export default function Task(props) {
    return (
        <div>
            {props.title} {props.description && `- ${props.description}`}
        </div>
    )
}