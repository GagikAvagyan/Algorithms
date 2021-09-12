let array = [66, 88, 100, 40, 115, 78, 65, 62, 35, 126, 20, 56, 110, 95, 26, 47, 56, 80, 45, 65];
let arr;
let arrSel;


// Bubble Sorting
function createArrayForBubble(){
   arr = Array.from((array))
}
createArrayForBubble()

function printInToHtmlBuble(){
   $(".BubbleContainer").empty();
   for( let i = 0; i < arr.length; i++){
      $(".BubbleContainer").append(`
         <div class="item" style="height: ${arr[i]}px;"></div>
      `);
   }
}
printInToHtmlBuble()

function print() {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            let Switch = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = Switch;
            printInToHtmlBuble()
         }
      }
      break
   }
}
setInterval(function (){
   print();
}, 250);

$(".bubbleSorting").click(function (){
   createArrayForBubble();
})

// Bubble Sorting



// selectionSorting

function createArrayForSelection(){
   arrSel = Array.from(array)
}
createArrayForSelection();

function printInToHtmlSelection(){
   $(".SelectionContainer").empty();
   for( let i = 0; i < arrSel.length; i++){
      $(".SelectionContainer").append(`
         <div class="item" style="height: ${arrSel[i]}px;"></div>
      `);
   }
}
printInToHtmlSelection();

function PrintSel(){
   for (let i = 0; i < arrSel.length; i++) {

      let min = i;
      for (let j = i + 1; j < arrSel.length; j++) {
         if (arrSel[j] < arrSel[min]) {
            min = j;
            break
         }
      }

      if (min != i) {
         let tmp = arrSel[i];
         arrSel[i] = arrSel[min];
         arrSel[min] = tmp;
         printInToHtmlSelection()
      }
   }
}
setInterval(function (){
   PrintSel();
}, 250);

$(".selectionSorting").click(function (){
   createArrayForSelection();
})
