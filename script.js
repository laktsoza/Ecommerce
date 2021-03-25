
const filterBtn = document.getElementById('filter-img');
const filterBar = document.getElementById('filter-bar');

filterBtn.addEventListener('click', (e) => {
    if(filterBar.classList.contains('hide')) {
        filterBar.classList.remove('hide')
    } else {
        filterBar.classList.add('hide')
    }

    // if(e.target.src == "./assets/women-filter-icons/adjustment.png") {
    //     e.target.src = "./assets/women-filter-icons/x.png";
    // } else {
    //     e.target.src = "./assets/women-filter-icons/adjustment.png";
    // }
})
