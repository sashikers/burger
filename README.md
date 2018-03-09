# Burger taster!

### Objective
Utilize MySQL, Node, Express, Handlebars, and a custom ORM. 
Use MVC design pattern: Use Node and MySQL to query and route data, and Handlebars to generate the HTML.

### Instructions
1. Clone the repository
2. Navigate to the folder in Terminal and install the required node.js packages by typing `npm install`
3. Create a MySQL database using a GUI of your choice or via a command line by:
..1. Logging into the database by typing `mysql -u root -p`
..2. Within the `mysql>` command line, create the database: `source schema.sql`
..3. Then seed the database: `source seeds.sql`
..4. Exit the `mysql>` command line: `exit`
4. In Terminal, create a server connection by running `node server.js`
5. In browser, navigate to `localhost:`, appending the appropriate port 

### Overview

App begins by showing the user a menu of burger options: 
![Initial interface](public/assets/img/initialinterface.png)

User is able to add a burger with a custom name: 
![Adding a burger](public/assets/img/addingburger.png)

The new burger is added to the menu: 
![Burger is added](public/assets/img/addedburger.png)

The user is then able to "devour the burger," or if it already has been eaten, make a new one. The burger moves between two menus. 

![Burger is eaten](public/assets/img/burgeriseaten.png)

### Remaining improvements
- _Deploying to Heroku_. Encountering errors while deploying to Heroku. Cannot seem to link the database correctly. 
- _Visuals_. CSS could definitely be more pro-style. 
- _Reloading_. App doesn't always reload when a burger status is changed.  
