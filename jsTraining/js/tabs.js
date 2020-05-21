(function() {
    const tabs = document.querySelectorAll('.tab_head_item');
    const contents = document.querySelectorAll('.tab_content_item');

    tabs.forEach ((tab, index) => {
        tab.onclick = () => {
            changeTab(index)
        };
    });

    function changeTab (index) {
        setActiveClass (tabs, index);
        setActiveClass (contents, index);
    }

    function setActiveClass (arr, index) {
        for ( el of arr ){
            el.classList.remove('active');
        }
        arr[index].classList.add('active');
    }
} ) ();

