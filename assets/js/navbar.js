function dropdownOpen(nav_links){
    var dropdownElement = nav_links.querySelector('#nav_links_dropdown');
    if (dropdownElement) {
        // console.log(dropdownElement)
        dropdownElement.classList.remove('hide');
        dropdownElement.classList.add('show');
        console.log(nav_links)
        nav_links.style.backgroundColor = "red";
    }
}

function dropdownClose(nav_links){
    var dropdownElement = nav_links.querySelector('#nav_links_dropdown');
    if (dropdownElement) {
        dropdownElement.classList.remove('show');
        dropdownElement.classList.add('hide');
        nav_links.style.backgroundColor = "#003380";
    }
}