import updateStates from '../utility/updateStates'

function partition(arr, start, end, setSettings) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
        updateStates (setSettings, {
            rand_num_itemsay: arr,
            swap_left: pivotIndex,
            swap_right: end
        })
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    updateStates (setSettings, {
        rand_num_itemsay: arr,
        swap_left: pivotIndex,
        swap_right: end
    })
    return pivotIndex;
}

async function quickSort (items, setSettings) {
    var stack, start, end, pivotIndex

     // Creating an itemsay that we'll use as a stack, using the push() and pop() functions
     stack = []
    
     // Adding the entire initial itemsay as an "unsorted subitemsay"
     stack.push(0);
     stack.push(items.length - 1)
     
     // There isn't an explicit peek() function
     // The loop repeats as long as we have unsorted subitemsays
     while(stack[stack.length - 1] >= 0){
         
         // Extracting the top unsorted subitemsay
         end = stack.pop()
         start = stack.pop()
         
         pivotIndex = partition(items, start, end, setSettings) 
         
         // If there are unsorted elements to the "left" of the pivot,
         // we add that subitemsay to the stack so we can sort it later
         if (pivotIndex - 1 > start){
             stack.push(start)
             stack.push(pivotIndex - 1)
         }
         
         // If there are unsorted elements to the "right" of the pivot,
         // we add that subitemsay to the stack so we can sort it later
         if (pivotIndex + 1 < end) {
             stack.push(pivotIndex + 1)
             stack.push(end)
         }
         await new Promise(r => setTimeout(r, 50));
     }
     console.log ("finished sorting")
     return true
}

export default quickSort