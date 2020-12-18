
# Flo-Products Test

Hi applicant!

This repo contains the starter code for this test, as well as the task description. The intention with this test is to have a look at how you solve a pretty straight forward problem, and then discuss it afterwards.

- There is a file call db.js with a "database"-array with 1000 products. This is your database, you are _not_ supposed to set up any database service like MongoDB or write to file or persist data in any way.

- We're using the three categories `<meat, greens, fish>` in the pre-populated database, but feel free to let the user add more categories if you like - no right or wrong.


### Tasks

1. Users should be able to list all the products. It should be possible to filter by category, maximum and minimum price. You should have a size of 24 products per page. No libraries for the list/table of products.  

2. Users should be able to create products from a form page. The products should be appended to the database.

3. If you click in one product of the list, you should return the 6 products with nearest price in the same category.

4. You should create a navBar to navigate to the different pages of the website.


### Optional

* Ability to remain the filters after refreshing the website.

* Option to clear all the filters at the same time 

* Style the website 

* Use ES6 Features. 


### Delivery

Clone the repo, solve the tasks and push your code to a public GitHub repo. Send a link to the solution to flo@archerknight.com. Think about what you've sent as the production/final version of the app.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### How it Went

Task 1: Initially it went pretty well adding the database.js objects to a table was relativly easy using ES6 array functions.

        I started working on sorting got some function implemented however I'm not certain that is working correctly going off of the console output. 

        For filtering I ended up resorting to indivual buttons however with more time this could be converted to a drop down list and the individual filter functions could be consolidated into one filter function. 

        I wasn't sure how to do pagination so moved onto working on task 2. 

        If given the oppertunity to do task 1 again I think I would resort to using a library as the functionality required  for task 1 is easier to implement


Task 2: Creating the form itself was easy enough however as we discussed I wasn't sure how to modify the database.js file. I didn't realise initially that you wanted me to pass the form Input 
        directly into the ProductList component. 

        Given more time I would fix this I tried to do a hacky work around to make it work with my current structure however it doesn't work therefore I would make the form component a child of productlist component and put the addToDatabase function within the productlist component which would then be passed down to the form component. 

        I think overall I was to focused on writing to the db.js file I began to overcomplicate it. 

Task 3: I wasn't entirely sure how to do this task by the time I got around to working on it. In the code you will see my strange attempt at working this out. 
        I believed the solution was related to using ES6 array functions although I think there may be more steps to it than I initially thought. 


Task 4: This was completed using React Router. Didn't any trouble working this one out. 


Overall I wish I did better at this test however this just means I will learn a lot when we go over the proper solution. 

