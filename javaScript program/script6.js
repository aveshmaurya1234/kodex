        //         <!-- # JavaScript Practice Questions

        // ## Fetch API

        // **1.** Write a fetch request that gets data from `https://jsonplaceholder.typicode.com/users` and logs the data.

        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then((data) => data.json()).then((data) => console.log(data))



        // **2.** Fetch data from an API and convert the response using `res.json()`.
            
        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then(res => res.json()).then(data => console.log(data))



        // **3.** Write a fetch request that logs the **response object** before converting it to JSON.

        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then(res => console.log(res))



        // **4.** Fetch data and log `"Data loaded"` after the JSON is received.

        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     console.log("Data loaded")
        // })


        // **5.** Fetch users and print the **total number of users returned**.

        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then(res => res.json())
        // .then(data => {
        //     console.log(data.length)
        // })



        // **6.** Write a fetch request that handles errors using `.catch()`.

        // let res = fetch("https://jsonplaceholder.typicode.com/users")
        // res.then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch(error => console.log(error));


        // ---

        // ## Promises (.then / .catch)

        // **7.** Create a Promise that resolves with `"Hello"` and print it using `.then()`.

        // let promise = new Promise((resolve, reject) => {
        //     resolve("hello")
        // })
        // promise.then(result => console.log(result));



        // **8.** Create a Promise that rejects with `"Something went wrong"` and handle it using `.catch()`.
        
        // let promise = new Promise((resolve, reject) => {
        //     if(false){
        //         return resolve("hello")
        //     }
        //     return resolve("Something went wrong")
        // })
        // promise.then(result => console.log(result)).catch((error) => console.log(error))



        // **9.** Write a Promise chain with **two `.then()` blocks**.

        // let myPromise = new Promise(function(resolve, reject) {
        //     resolve(10);
        // });

        // myPromise.then(function(value) {
        //     console.log("first then:", value);
        //     return value * 2;
        // })
        // .then(function(result) {
        //     console.log("second then:", result);
        // });



        // **10.** Create a Promise that resolves after **2 seconds** using `setTimeout`.

        // let myPromise = new Promise(function(resolve, reject) {
        //     setTimeout(() => {
        //         resolve(10);
        //     },2000)
        // });

        // myPromise.then(function(value) {
        //     console.log("first then:", value);
        // })



        // **11.** Write a Promise chain that prints `"Step 1"` then `"Step 2"`.

        // let myPromise = new Promise(function(resolve, reject) {
        //     resolve(10);
        // });
        // myPromise.then(function() {
        //     console.log("Step 1");
        // })
        // .then(function() {
        //     console.log("Step 2");
        // });

        // ---

        // ## Async / Await

        // **12.** Convert the following code into `async/await`: `fetch(url).then(res => res.json()).then(data => console.log(data))`

        // let resolve = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     let resData = await res.json()
        //     console.log(resData)
        // }
        // resolve()



        // **13.** Write an async function that fetches data and logs it.

        // let resolve = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     let resData = await res.json()
        //     console.log(resData)
        // }
        // resolve()



        // **14.** Write an async function that fetches data and stores it in a variable.

        // let resolve = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     let resData = await res.json()
        //     return resData;
        // }

        // let main = async () => {
        //     const result = await resolve(); // storing fetched data in a variable
        //     console.log(result);
        // }
        // main();



        // **15.** Write an async function that waits for a Promise that resolves after **1 second**.

        // let resolveData = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     let resData = await res.json()
        //    console.log(resData)
        // }
        
        // let myPromise = new Promise(function(resolve, reject) {
        //     setTimeout(() => {
        //         resolve(resolveData())
        //     },5000)
        // });

        

        // **16.** Write an async function that fetches data and prints `"Finished fetching"` after the data is received.

        // let resolve = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     let resData = await res.json()
        //     console.log(resData)
        //     console.log("Finished fetching")
        // }
        // resolve()

        // ---

        // ## Error Handling

        // **17.** Write a `try/catch` block that handles an error from `JSON.parse()`.

        // let resolve = async () => {
        //     try{
        //         let data = JSON.parse('{"name":"avesh" , "age": 25}')
        //         console.log(data)
        //     }catch(error){
        //         console.error();
        //     }            
        // }
        // resolve()
        


        // **18.** Create a function that throws an error `"Invalid input"`.

        // function checkInput() {
        //     if (true) {
        //         throw new Error("Invalid input");
        //     }
        // }
        // checkInput()



        // **19.** Write a `try/catch` example that prints `"Error occurred"` in the catch block.

        // let resolve = async () => {
        //     let res = await fetch("")
        //     try{
        //         let data = await res.json()
        //         console.log(data)
        //     }catch(error){
        //         console.error("Error occurred");
        //     }            
        // }
        // resolve()



        // **20.** Write a `try/catch/finally` example where the finally block prints `"Always runs"`.

        // let resolve = async () => {
        //     let res = await fetch("")
        //     try{
        //         let data = await res.json()
        //         console.log(data)
        //     }catch(error){
        //         console.error("Error occurred");
        //     }finally{
        //         console.log("Always runs")
        //     }        
        // }
        // resolve()



        // **21.** Use `try/catch` inside an async function.

        // let resolve = async () => {
        //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
        //     try{
        //         let data = await res.json()
        //         console.log(data)
        //     }catch(error){
        //         console.error("Error occurred");
        //     }            
        // }
        // resolve()


        // ---

        // ## ES Modules

        // **22.** Create a file `utils.js` that exports a variable `name = "JavaScript"` using **named export**.
        // import { name } from "./utils.js";
        // console.log(name);

        

        // **23.** Import the `name` variable in another file and log it.

        // **24.** Create a **default export** function `add(a, b)` that returns the sum.

        // import add from "./utils.js";
        // console.log(add(3, 8));



        // **25.** Import the default exported `add` function in another file and use it. -->