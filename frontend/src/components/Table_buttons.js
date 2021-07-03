import React from 'react'

export const Table_button = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <button ref={resolvedRef} className="btn btn-primary btn-sm">Click me</button>
        </>
      )
    }
  )
