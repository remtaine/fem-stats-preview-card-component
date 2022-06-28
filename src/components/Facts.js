import React from 'react'
import PropTypes from 'prop-types'

function Facts(props) {
    let {num, detail} = props;
    return (
        <span className="flex flex-col items-center lg:items-start">
            <h2 className="font-bold">{num}</h2>
            <span className="text-fem-600 uppercase font-extralight text-xs">{detail}</span>
        </span>
    )
}

Facts.propTypes = {
    num: PropTypes.string,
    detail: PropTypes.string,
}

export default Facts
