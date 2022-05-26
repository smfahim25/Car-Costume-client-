import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div className='border-4 border-black p-5'>
                <h2 className='font-bold'>How will you improve the performance of a React Application?</h2>
                <p>firstly i have to know how my components interected ,When considering optimizing the application bundle size, its worth checking how much code i am actually utilizing from dependencies.always have to Avoid Inline Function Definition in the Render Function.Avoid using Index as Key for map because using the key as the index can show your app incorrect data as it is being used to identify DOM elements.Therefore there are lot of way to improve my react application.</p>
            </div>
            <div className='border-4 border-black p-5'>
                <h2 className='font-bold'>How does prototypical inheritance work?</h2>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. In JavaScript, objects have a special hidden property Prototype , that is either null or references another object. That object is called “a prototype”: When we read a property from object, and its missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.</p>
            </div>
            <div className='border-4 border-black p-5'>
                <h2 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>Because usestate retrun 2 values.one is current state value and other one is function,we pass the initial state into this function.usestate returns where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state. We can use the setCounter method to update the state of count anywhere That’s why wedo not set the state directly.</p>
            </div>
            <div className='border-4 border-black p-5'>
                <h2 className='font-bold'>What is a unit test? Why should write unit tests?</h2>
                <p>Unite test is check all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested.there are many advantages of unit test Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing. When you add more features to any software, you might need to make changes to the old design and code, and this can be expensive as well as risky. If you use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier. For the best practice, all projects must be under unit testing, but normally it is used for larger projects.</p>
            </div>
            <div className='border-4 border-black p-5'>
                <h2 className='font-bold'>What are the different ways to manage a state in a React application?</h2>
                <p>There are four main types of state you need to properly manage in your React apps:1. Local state,2. Global state,3. Server state,4. URL state.</p>
            </div>
        </div>
    );
};

export default Blogs;