var currentLinks = [],
  d = document,
  sometest = false,
  w = window;
$(d).ready( function() {
    //ok when someone clicks on the div, we want a small form to pop-below the div and to allow them to input a links
    //this form will have a simple label, a lightblue? background, and an input field, and another button
    //when the last button in the form above is clicked the link is pushed to a simple status array, stored as status[link-number]=link
    $('.can-click').on('click', function () {
        //ok time to append a small form
        var newBtn = d.createElement('div');
        newBtn.setAttribute('class', 'plus-button two columns can-click');
        var plusIcon = d.createElement('i');
        plusIcon.setAttribute('class', 'fa fa-plus plus-icon');
        newBtn.appendChild(plusIcon);
        var elem = this;
        //ok so `This` refers to the dom node
        UIkit.modal.prompt("Link: ", '', function(value){
            //here we have access to value which will be a link
            console.log(value + " 19");
            if(value != ''){
                sometest = true;
                currentLinks.push(value);
                elem.className = "plus-button two columns activated";
                elem.innerHTML = "<i class='fa fa-check plus-icon'></i>";
                elem.parentNode.appendChild(newBtn);
            }
        });
    });
    console.log(currentLinks);
});
