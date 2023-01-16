

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
  else{
    window.alert("Empty input is not allowed!");
     }
});  
  

      function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item; // note the use of the item parameter and then delete this comment
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function () {
          list.removeChild(li);
          deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
          input.focus();
        });
      }

      function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
      }
      function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
      }