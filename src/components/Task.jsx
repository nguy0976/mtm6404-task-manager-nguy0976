import React from "react";

export default function Task(props) {
    return (
        <header>
            <div class="tasks">
                <div class="task">
                    <p>{props.taskItem}</p>
                    <span>{props.itemType}</span>
                </div>
            </div>
        </header>  
    )
}

   