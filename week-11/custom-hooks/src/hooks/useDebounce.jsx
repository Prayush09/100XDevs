import {useEffect, useState} from 'react'

export function useDebounce(inputVal, delay){

  const [debouncedValue, setDebouncedValue] = useState(inputVal);

  useEffect(()=>{
    const handler = setTimeout(()=>{
        setDebouncedValue(inputVal);
    }, delay)

    return ()=>{
        clearInterval(handler);
    };
  },[debouncedValue, delay]);


  return debouncedValue;
}
