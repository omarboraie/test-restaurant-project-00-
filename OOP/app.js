let menu = require('./menu.js');
let question = require('./input.js');
const Order = require('./order.js');

// function that Display menu for the user
function menuDisplay() {
    console.log("\nHello Our User");
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
    const order = new Order();
    let input = '';
    function ask() {
        return question('\n-type the id of the item you want or type done to finish and reset to reset order or remove item id: ')
            .then(answer => {
                input = answer;
                if (input.toLowerCase() === 'done') {
                    order.getBill();
                    return App();
                }
                if(input.toLowerCase() === 'reset'){
                    order.resetOrder();
                    return ask();
                }
                if (input.startsWith('remove ')) {
                const idPart = input.slice(7).trim();
                const id = Number(idPart);
                if (isNaN(id)) {
                    console.log('Please provide a valid number after "remove".');
                } else {
                    order.removeItem(id);
                    console.log(`item removed}`);
                }
                return ask();
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
