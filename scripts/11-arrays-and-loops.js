//An Array
const anArray = [10, 20, 30];
//console.log(anArray);

//get value

//console.log(anArray[0]);
//console.log(anArray[1]);

//change value

anArray[1] = 99;
//console.log(anArray);

//things to store in an array

const listItems = [1, 'well, ok', true, { name: 'socks'}, [2, 'nested array']];

//properties and methods

//console.log(anArray.length);

// .push() to add value at the end
anArray.push(100);
//console.log(anArray);

// .splice() to remove value 
anArray.splice(0, 2);
//console.log(anArray);

//SECTION - LOOPS


//While Loop 

let i = 1;

while (i <= 5) {
  // console.log(i); 
   i++;
}

//For Loop

for (let i = 0; i <= 5; i++) {
    //console.log(i);
} 

//SECTION - CLASS WORK

//Build Generate Random Numbers Prog

let randomNumber = 0;

/*
while (randomNumber < 0.5) {
    randomNumber = Math.random();
    console.log(randomNumber);
}
*/

//looping through arrays

const todoList = [
    {
        name: 'make dinner',
        dueDate: '2023-08-29'
    },

    {
        name: 'wash dishes',
        dueDate: '2023-08-29'
    },

    {
        name: 'watch youtube',
        dueDate: '2023-08-29'
    }
    
];

// using for-loop

/*
for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    console.log(element);
}

// using for-each-loop



element = todoList[i];
todoList.forEach(element => {
    console.log(element);
});

*/

//Accumulator Pattern

const nums = [1, 2, 3];
let total = 0;

/*

//Adding values in an array

for (let i = 0; i < nums.length; i++) {
   const num = nums[i];
   total += num;
}

console.log(total);

*/

//Recereating Array but doubled

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
   let num = nums[i];
   numsDoubled.push(num * 2) ;
}

//console.log(numsDoubled);

const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
//console.log(array1);
//console.log(array2);

//!SECTION Destructuring

//const array3 = [1, 2, 3];
//getting the variables out using shorthand method
const [firstValue, secondValue, thirdValue] = [1, 2, 3];

//!SECTION LOOPS

//continue and break in loops

for (let i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
   //console.log(i);
    if (i === 8) {
        break;
    }
}

//using while loop

let index = 1;

while (index <= 10) {

    if (index % 3 === 0) {
        index++;
       continue; 
    }
    //console.log(index);
    index++;
}

//functions in arrays

function doubleArray (numbers) {
    const numsDoubled2 = [];

    for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num === 0) {
        return numsDoubled2;
    }
    numsDoubled2.push(num * 2) ;
    }

    return numsDoubled2;
}

console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 5]));

//Making To-Do App to further utilise Arrays

taskList = [];

addTask = document.getElementById('add-task');
displayTask = document.getElementById('display-task');
textArea = document.getElementById('text-area');

textArea.addEventListener('keydown', () => {
   if (event.key === "Enter") {
        readInput();
    }
});

renderTaskList();

addTask.onclick = function () {
    readInput();
}

function readInput () {
    let inputVal = document.getElementById('text-area').value;

    let dateVal = document.getElementById('due-date').value;
    
    taskList.push({
        name: inputVal,
        dueDate: dateVal
    });

    renderTaskList();

};

function renderTaskList () {
    
    let taskListHTML = '';

    // Method 1

    for (let i = 0; i <  taskList.length; i++) {
        const elements = taskList[i];

        const { name, dueDate } = elements;

        const htmlStuff = `
            
            <div class = 'task-name'>
                ${name}
            </div>

            <div class = 'due-date'> 
                ${dueDate}
            </div>

            <button 

            class = "delete"
            >Delete Task</button>
        `;

        taskListHTML += htmlStuff;

        displayTask.innerHTML = taskListHTML;

        document.querySelectorAll('.delete')
            .forEach((deleteBtn, index) => {
                deleteBtn.addEventListener('click', () => {
                    taskList.splice(index, 1);
                renderTaskList();
                });
            });
        
    }

    

    // Method 2 (Which I like More... Dies at 2nd stage sadly)

    /*
    element = taskList[i];

    taskList.forEach(elementsObject => {

        const htmlStuff = `
            <p>
                ${element}
                <button
                onclick = "deleteTask()"
                >Delete Task</button>
            </p>
        `;

        taskListHTML += htmlStuff;

        displayTask.innerHTML = taskListHTML;
    });

    */
}

//!SECTION TEST-WORK

let numberList = [10, 20, 30, 66];
numberList[numberList.length - 1]= 22;

//console.log(numberList);

function arraySwap(array) {
    const lastIndex = array.length - 1;

    // We need to save the values first before
    // swapping. Otherwise, if we swap directly,
    // we would lose one of the values.
    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));