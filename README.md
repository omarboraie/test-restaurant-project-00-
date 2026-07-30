june-16-2026 Tuesday
-------------------------
First Draft for restaurant system
-What I learned and used
>Object
>Classes
>Functions
>Data Types
>Variables
>Loops(for)
>IF statement
>Foreach()
>GitHub Creating Repo and Upload Project
---------------------------
App Functions:
- Displays menu
- Allows users to select items
- Calculates subtotal, tax (14%),
- Have an option to select a level of service to add tips based on it


june-17-2026 Wednesday
-------------------------
Second Draft for restaurant system
Split into three separate files (module) =>
- menu.js – defines menuItem class and exports the menu array
- calculations.js – exports the finalCalculator function
- app.js – imports the other modules, contains menuDisplay and App()
- Uses CommonJS (require / module.exports)
- menuItem now has an additional category property ("starch", "protein", "sweetdish")
- Menu is built with an array and uses push()
- finalCalculator is exported from a separate module
- tip adding function is inner function userRate(userRate) that returns the updated total
---------------------------

june-21-2026 Sunday
-------------------------
 + make closure called newOrder that returns an object with 4 methods addItem(),removeItem(),getBill(),reset()
 + we use order.addItem() to add order item and order.getBill() to show the bill
 + add some security for userChoice, tax, subtotal, total

june-24-2026 Wednesday
-------------------------------
+ Separated input module
+ user types id to add an item or done to finish
+ using Promise in question and input

june-29-2026 Monday
-------------------------------
+ Add OOP with abstraction and encapsulation
+ user remove item feature
+ app recursive run after finshing bill

july-5-2026 Sunday
-------------------------------
+ Recap Project (Alpha)
------------------------------
july-29-2026 Wednesday
---------------------------------
+ project layout into controllers,middleware,routes,models
+ username&password auth
+ JWT auth
+ Create Express Server
+ little database knowledge(monogDB,mongoose) creating models

july-30-2026 Thursday
---------------------------------
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/anotherTypes.ts
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/app.ts
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/basics.ts
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/coreTypes.ts
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/functions.ts
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/index.html
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/package-lock.json
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/package.json
https://github.com/omarboraie/test-restaurant-project-00-/blob/main/test00.ts
+ What is TypeScript
+ Installing & Using TypeScript
+ The Advantages of TypeScript
+ Setting Up our Development Environment
+ The Course Project Setup
+ Using Types
+ TypeScript Types vs JavaScript Types
+ Numbers, Strings and Booleans
+ Type Assignment and Type Inference
+ Object Types
+ Array Types
+ Tuples
+ Enums
+ The Any Type
+ Union Types
+ Literal Types
+ Type Aliases
+ Function Return Types and Void
+ Function Types
+ Function Types and Callbacks
+ The Unknown Type
+ The Never Type
