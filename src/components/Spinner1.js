import React from 'react'
import loding from './loding.gif'

export default function spinner() {
    return (
        <div>
            <img src={loding} alt="image" class="rounded mx-auto d-block"></img>
        </div>
    )
}
