let menu = require('./menu.js');
let order = require('./calculations.js')
let question = require('./input.js')

// function that Display menu for the user
function menuDisplay() {
    console.log("Hello Our User");
    const categories = ['starch', 'protein', 'sweetdish'];
    categories.forEach(cat => {
        console.log(`\nLet's choose ${cat}:`);
        menu.filter(item => item.category === cat)
            .forEach(item => console.log(`for ${item.name} choose ${item.id}`));
    });
}

// The logic (main function)
function App() {
    menuDisplay();

    let input = '';
    function ask() {
        return question('-type the id of the item you want or type done to finish: ')
            .then(answer => {
                input = answer;
                if (input.toLowerCase() === 'done') {
                    order.getBill();
                    return;
                }
                const id = parseInt(input, 10);
                if (isNaN(id)) {
                    console.log('Please enter a number.');
                    return ask();
                }
                const item = menu.find(it => it.id === id);
                if (!item) {
                    console.log(`we don't have ${id}. Try again.`);
                    return ask();
                }
                try {
                    order.addItem(item);
                    console.log(`You add "${item.name} `);
                } catch (error) {
                    console.log(error);
                }
                return ask();
            });
    }

    return ask();
}

//run
App();
