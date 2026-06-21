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
