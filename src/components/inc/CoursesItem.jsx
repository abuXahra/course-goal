import React, { useState } from 'react'
import { CourseStyled } from '../../style/CouseGoal.style'
import { FaTimes } from 'react-icons/fa'

function CoursesItem(props) {
    const [isDone, setisDone] = useState(false)
    //deleteIdHandler
    const deleteIdHander = () => {
        props.handDelete(props.id)
    }

    //Is done handler
    const isDoneHandler = () => {
        setisDone(!isDone);
    }

    return (
        <CourseStyled onClick={isDoneHandler} onDoubleClick={deleteIdHander} isDone={isDone}  >
            {props.title}
            <FaTimes onClick={deleteIdHander} />
        </CourseStyled>
    )
}

export default CoursesItem