import React from 'react';
import useTitle from '../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className="my-8 mb-12 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-gray-400 font-mono">THE HIKARU NAKAMURA BLOG</span> </h1>
            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded my-4'>

            <h2 class="text-4xl font-extrabold dark:text-white font-mono">Difference between SQL and NOSQL?</h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;SQL stands for structured query language (mySQL, postgreSQL, Oracle) and NOSQL(mongodb) stands for not structures query language. In SQL languages the data is kept in tables and in a nosql language the data is kept in object format and it is generally considered to be more flexible, especially when created quick response websites where you will have to deal with lots of data in very short time.</p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">SQL databases are relational, NoSQL databases are non-relational. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <p  class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

            </div>
            <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4'>

            <h2 class="text-4xl font-extrabold dark:text-white font-mono">What is JWT, and how it works? </h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;JWT stands for JSON web token. It is a way of protecting your websites data, therefore it is a authentication method. In this mehtod when the user logs in he is given two token one being access token and the other being refresh token. The access token expires after a fixed time. Showing the refresh token the user gets another access token.</p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
            <p  class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

            </div>
            <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4'>
 
            <h2 class="text-4xl font-extrabold dark:text-white font-mono">What is the difference between javascript and NodeJS?</h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. It  is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. </p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">NodeJS is a javascript runtime environment which allows js to be used on the server side. It is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. </p>
            <p  class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

            </div>
            <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4'>

            <h2 class="text-4xl font-extrabold dark:text-white font-mono">How does NodeJS handle multiple requests at the sametime? </h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;Nodejs use event loop to run multiple requests at the same time. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            <p  class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

            </div>
            <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
           
        </div>
    );
};

export default Blogs;