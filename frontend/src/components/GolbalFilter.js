import React,{useState} from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter=({filter, setFilter}) => {
    const [value, setvalue] = useState(filter);
 const onChange = useAsyncDebounce((value)=>{
        setFilter(value || undefined)
    },1000)
    return (
        <>
            <span>
                Search: {' '}
                <input className="px-2" value ={value || ''} onChange={(e) => {setvalue(e.target.value); onChange(e.target.value)}}/>
            </span>
        </>
    )
}

// export default Filter
