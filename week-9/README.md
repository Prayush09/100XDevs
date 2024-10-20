Today's agenda
    React - Why we use it? 
            For static websites you don't need react
            But if you have a dynamic website, you're life will be much easier when  you use react.
            The bundle size increases but the developer experience is very nice compared to vanilla JS.
            
            -> React is an easier way to write normal HTML/CSS/JS

                REACT ===> HTML/CSS/JAVASCRIPT

            function onButtonPress(){
                const curr = document.getElementById("btn").innerHTML;
                const currCounter = currentValue.split(" ")
            }

To create a react app, you worry about these two things
    * State
    * Components

    Creators of frontend framworks realised that all website can effectively be divided into two parts.

    State/Components/Re-rendering

    State: An object that represents the current state of the app
           It represents the dynamic things in your app(things that change)
           Example: counter which changes it's count.
    Components: How a dom element should render given a state is called component.
                It's re-usable, dynamic, HTML snippet that changes given the state.
                Takes a state variable as input and supposed to render it accordingly.

                You usually have to define all your components once and then you have to do is update the state of your app, React takes care of re-rendering your app.

                A component never return HTML it returns an XML
                JSX allows you to write HTML-like code directly within JS.

        -> useState(0) => Returns an array of two element [1, 2]