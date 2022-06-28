import React from 'react'

function FilteredImage(props) {
    let {design} = props;
    return (
        <div className="w-full h-auto relative">
            <img src={design} alt="design" className="bg-fem-300 lg:rounded-r-lg lg:rounded-tl-none rounded-t-lg object-cover h-full w-full"></img>
            <div class="bg-fem-300/50 w-full h-full lg:rounded-r-lg lg:rounded-tl-none rounded-t-lg absolute bottom-0 opacity-100 z-50 duration-500"></div>
        </div>
    )
}


export default FilteredImage
