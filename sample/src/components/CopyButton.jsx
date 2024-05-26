import React from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const CopyButton = ({ code }) => {
    const [isCopied, handelCopy] = useCopyToClipboard(3000)

    return (
        <>
            <button onClick={() => handelCopy(code)}>
                {isCopied ? 'Done' : 'Copy'}
            </button>
        </>
    )
}

export default CopyButton