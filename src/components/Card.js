import React from 'react'
import {FcLike} from 'react-icons/fc'

function Card({course}) {
  return (
    <div>
        <img src = {course.img.url}></img>

        <div>
            <butoon>
                <FcLike fontSize="1.75rem" />
            </butoon>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card