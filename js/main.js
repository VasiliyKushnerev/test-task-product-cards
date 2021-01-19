

window.onload = function () {
    render();
    sendForm();
    closeForm();
}




// -----------------------------------------------------
// -----------------    AJAX FORM    --------------------
// -----------------------------------------------------
function sendForm() {
    jQuery(".card-form__form").submit(function (e) {
        e.preventDefault();
        let form_data = jQuery(this).serialize();
        jQuery.ajax({
             type: "POST",
            dataType: 'html',
             url: "mail.php",
            data: form_data,
            success:function(data){
                jQuery('.card-form__form_results').html(data);
                jQuery('.card-form__form').children("input").slice(0,3).val('');
            },

    });
    });
    };

// -----------------------------------------------------
// -----------------    JSON READ    --------------------
// -----------------------------------------------------
function render() {
   jQuery.getJSON('product.json', function(data) {

        let itemsList = document.querySelector('.content');
        for (let product in data.product) {
            let item = document.createElement('div');
            item.className = "card-content";
            let img = document.createElement('div');
            img.className = "card-content__image";
            img.innerHTML = `<img src="${data.product[product].img}" alt="" class="card-content__img">`;
            item.append(img);
            let p = document.createElement('p');
            p.className = 'card-content__description';
            p.textContent = data.product[product].name;
            item.append(p);
            let span = document.createElement('span');
            span.className = 'card-content__span';
            span.textContent = data.product[product].price;
            item.append(span);
            let button = document.createElement('button');
            button.className = 'card-content__button';
            button.textContent = 'Купить';
            item.append(button);
            button.addEventListener("click",function () {
                let overlay = document.querySelector('.card-form');
                overlay.classList.toggle("visible");
                let goods = this.parentNode.children[1].textContent;
                document.querySelector('.card-form__form').children[4].value = goods.replace(/ +/g, ' ').trim();
            });
            itemsList.append(item);
        }

    });
    }

// -----------------------------------------------------
// -----------------    MODAL FORM    --------------------
// -----------------------------------------------------

function closeForm() {
        let overlay = document.querySelector('.card-form');
        let close = document.querySelector ('.card-form__form_span');
        close.addEventListener("click",function (){
            overlay.classList.remove("visible");
        });
    }




