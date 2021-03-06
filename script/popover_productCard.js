//popover_productCard
if (document.querySelector('.popover_productCard')) {

    function openPopup (text, type, time, link, wordLink) {
        let popover_productCard = document.querySelector('.popover_productCard');
            popoverText_productCard = document.querySelector('.popoverText_productCard');

        
        popover_productCard.style.opacity = "1";
        popover_productCard.style.display = "block";
        if (link && wordLink) {
            let str = text;
                link = `<a class="popupLink" href="${link}">${wordLink}</a>`;        
                str = str.replace(/#word#/i, link);
            popoverText_productCard.insertAdjacentHTML('afterbegin', str);
        } else {
            popoverText_productCard.textContent = text;    
        }
        if (type === 'danger') {
            popover_productCard.style.borderColor = "#e84d4d";
            popoverText_productCard.style.color = "#e84d4d";
        }
        if (type === 'info') {
            popover_productCard.style.borderColor = "#5bc793";
            popoverText_productCard.style.color = "#5bc793";
        }
        if (type === 'warning') {
            popover_productCard.style.borderColor = "#d9c836";
            popoverText_productCard.style.color = "#d9c836";
        }
        setTimeout(function () {
            popover_productCard.style.opacity = "0";
            popover_productCard.style.display = "none";
            popoverText_productCard.textContent = '';
            popover_productCard.style.borderColor = "crimson";
            popoverText_productCard.style.color = "none";
        }, time);
    }
}


