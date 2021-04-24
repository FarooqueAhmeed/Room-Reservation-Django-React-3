import React from 'react'
import { Heading } from "@chakra-ui/react"

export default function Title({title}) {
    return (
        <div className="title text-center my-5">
            <Heading>{title}</Heading>
        </div>
    )
}
