
const filterBtn = document.getElementById('filter-img');
const filterBar = document.getElementById('filter-bar');

filterBtn.addEventListener('click', (e) => {
    if(filterBar.classList.contains('hide')) {
        filterBar.classList.remove('hide')
    } else {
        filterBar.classList.add('hide')
    }

    if(e.target.src.includes('adjustment')) {
        e.target.src = e.target.src.replace('adjustment', 'x-filter');
    } else {
        e.target.src = e.target.src.replace('x-filter', 'adjustment');
    }
})
