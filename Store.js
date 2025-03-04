let get_item = document.querySelectorAll('.item');

let allItems = document.querySelector('.allItems');
let Items = document.querySelectorAll('.Items');

let buyNowBtn = document.querySelectorAll('.buyNow');

let billAmt = document.querySelector('.totAmt');

let btnCount = 0

// for biscuits

get_item[0].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Biscuits'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for sweets

get_item[1].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Sweets'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for milk

get_item[2].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Milk'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for chocolate

get_item[3].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Chocolate'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for colddrink
get_item[4].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'ColdDrink'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for namkeen
get_item[5].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Namkeen'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})




for (i=0;i<buyNowBtn.length;i++){
    buyNowBtn[i].addEventListener('click', function (e){

        getDiv = document.getElementsByName(`${e.target['name']}`);
        let title = document.querySelector('.titlelst');
        let price = document.querySelector('.pricelst');

        listItemName = document.createElement('li');
        listItemPrice = document.createElement('li');

        listItemName.innerHTML = `<i class="fa-solid fa-trash dltliName"> ${getDiv[0].children[1].innerText}</i>`;
        listItemPrice.innerHTML = `<i class="fa-solid fa-trash dltliPrice"> ${getDiv[0].children[2].children[0].innerText} </i>`;

        billAmt.innerText = parseInt(billAmt.innerText) + parseInt(getDiv[0].children[2].children[0].innerText);

        title.appendChild(listItemName);
        price.appendChild(listItemPrice);

        // console.log(getDiv[0].children[1].innerText); // NAME OF ITEM
        // console.log(getDiv[0].children[2].children[0].innerText); // PRICE OF ITEM  
})
}


let titleol = document.querySelector('.titlelst');
let priceol = document.querySelector('.pricelst');  

titleol.addEventListener('click', function(e){
    if(e.target.nodeName == 'I'){
        e.target.parentElement.remove();
    };
    
});

priceol.addEventListener('click', function(e){
    if(e.target.nodeName == 'I'){
        gettitle = document.querySelector('.dltliName');

        getIndexLi = document.querySelectorAll('.total-content');

        e.target.parentElement.remove();    
        billAmt.innerText = parseInt(billAmt.innerText) - parseInt(e.target.innerText);
    };
});
