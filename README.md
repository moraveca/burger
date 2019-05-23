Burger App

This app utilizes node.js, express, handlebars, and MySQL as well as a local ORM to help make queries to the MySQL database. This app also follows MVC protocol.

![](burger_demo.gif)

The first thing you can do in this app is add your own type of burger that you would like to eat. Once you click on the submit button, your new burger will be added to the SQL database and the page will reload with the new information. This process uses handlebars to simplify looping through all of the database's information and displaying it on the HTML page. 

Once you click on the, "Devour," button, a query is sent via MySQL that updates the burger's entry and the page again reloads with new information displayed via handlebars.

You can find the working app online right here: 

https://vast-bastion-19663.herokuapp.com/