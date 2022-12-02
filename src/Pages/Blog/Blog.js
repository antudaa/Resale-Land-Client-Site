import React from 'react';
import DynamicRouteName from '../../Hooks/DynamicRouteName';

const Blog = () => {

    DynamicRouteName("Blog");

    return (
        <div className='mb-16'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl text-sky-500 my-16'>Blogs</h1>
                <div className="collapse w-3/5 mx-auto">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-white text-2xl bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <img className='my-6' src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png" alt="" />
                        <p>React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
                            <br />
                            We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState
                            <br />
                            Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future
                        </p>
                    </div>
                </div>
                <div className="collapse w-3/5 mx-auto">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-white text-2xl bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <img className='my-6' src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            <br />
                            The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.

                        </p>
                    </div>
                </div>
                <div className="collapse w-3/5 mx-auto">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-white text-2xl bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">

                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            <br />
                            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.

                        </p>
                    </div>
                </div>
                <div className="collapse w-3/5 mx-auto">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-white text-2xl bg-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <img className='my-6' src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png" alt="" />
                        <p>Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively
                            <br />
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                            <br />
                            It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;