import React from 'react';

function app(){
    //state initialization
    const[count, setCount] = useState(0);

    function onClickHandler(){
        setCount(count + 1);
    }

    return(
        <div>
            <Button id="btn" onClick={onClickHandler}>
                Counter {count}
            </Button>
        </div>
    )
}

//function Button(props){
    function onButtonClick(){
        props.setCount(props.count + 1);
    }

    return <button onClick={onButtonClick}>Counter {props.count}</button>
    /*
    //this is another way to return the same thing given above.
        return React.createElement(
            button,
            {onClick: onButtonClick},
            `Counter ${props.count}
        )
    */
//}

export default app;

//TODO APP