import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const Card = ({ laptopName, laptopDesc, image }) => {

    const [Color, setColors] = useState('white')

    function random() {
        let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'black', 'white']
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        setColors(randomColor)
    }


    return (
        <>
            <div onClick={random} className="w-[300px] rounded-md m-4 flex-row" style={{ backgroundColor: Color }}>
                <img
                    src={image}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold text-black">
                        {laptopName} <ArrowUpRight className="h-4 w-4" />
                    </h1>
                    <h5 className="mt-3 text-sm text-gray-600">
                        {laptopDesc}
                    </h5>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card