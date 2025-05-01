let name = document.getElementById('name')
let details = document.getElementById('details')
let postButton = document.getElementById('postButton')
let updateButton = document.getElementById('updateButton')


let arr = []
let activeIndex;

function deleteTask(index) {
    arr.splice(index, 1)
    display()

}

function editTask(index) {
    postButton.style.display = 'none'
    updateButton.style.display = 'block'
    name.value = arr[index].name
    details.value = arr[index].details
    activeIndex = index
    

}

function doneTask(index) {
    arr[index].isDone = true
    display()

}

updateButton.addEventListener('click', () => {
    arr[activeIndex].name = name.value
    arr[activeIndex].details = details.value
    let tasklist = document.getElementById('taskList')
    tasklist.innerHTML = ''
    console.log(arr);
    name.value = ''
    details.value = ''
    postButton.style.display = 'block'
    updateButton.style.display = 'none'
    display()

})



const display = () => {
    let tasklist = document.getElementById('taskList')
    tasklist.innerHTML = arr.map((item, index) => {
        if (item?.isDone === true) {
            return `
           <div class="taskID  bg-green-300 border border-gray-300 rounded-lg p-4 shadow-sm">
                        <div>
                    <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                    <p class="text-sm text-gray-600">${item.details}</p>
                </div>
                       <div class="grid grid-cols-3 space-x-2">
                           <div class="flex justify-between gap-1">
       
                                    <span class="text-green-700 font-medium">Completed</span>
                               <button onclick="deleteTask(${index})" class="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded-lg transition duration-300">
                                   Delete
                               </button>
                          
                               
                           </div>
                       </div>
                   </div>
           `
        }
        return `
            <div class="taskID  bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                    <p class="text-sm text-gray-600">${item.details}</p>
                </div>
                <div class="grid grid-cols-3 space-x-2">
                    <div class="flex justify-between gap-1">

                        <button  onclick="editTask(${index})" class=" edit bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-1 px-2 rounded-lg transition duration-300">
                            Edit
                        </button>
                        <button onclick="deleteTask(${index})" class="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-2 rounded-lg transition duration-300">
                            Delete
                        </button>
                        <button  onclick="doneTask(${index})" class=" done bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-2 rounded-lg transition duration-300">
                            Done
                        </button>
                    </div>
                </div>
            </div>
    `
    }).join('');
}






postButton.addEventListener('click', () => {
    if (name.value == '' || details.value == '') {
        alert('Please fill all the fields')
        return
    }
    let obj = {
        name: name.value,
        details: details.value
    };
    arr.push(obj)
    name.value = ''
    details.value = ''
    display()
    

})