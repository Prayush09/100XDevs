import {useEffect, useRef} from 'react';

export const usePrev = (value) => {
    //this runs first time the usePrev is called, only.
    const ref = useRef();//lets you store a value, whenever a value changes the component does not re-render. but updates the value.

    //this runs second
    useEffect(() => {
        ref.current = value;
    },[value]);

    return ref.current;//this runs first
}

//it returns first, effect gets called later... 