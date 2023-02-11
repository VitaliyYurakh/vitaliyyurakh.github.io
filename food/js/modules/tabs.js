function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // Tabs (block: preview)
    const tabHeaderItem = document.querySelectorAll(tabsSelector)
    const tabContents = document.querySelectorAll(tabsContentSelector)
    const tabHeaderItems = document.querySelector(tabsParentSelector)

    const hiddenTabContent = () => {
        tabContents.forEach(tab => {
            tab.classList.remove('show')
            tab.classList.add('hide')
        }) 
        tabHeaderItem.forEach(item => {
            item.classList.remove(activeClass)
        })
    }
    
    const showTabContent = (i = 0) => {
        tabContents[i].classList.remove('hide')
        tabContents[i].classList.add('show')
        tabHeaderItem[i].classList.add(activeClass)
    }

    hiddenTabContent()
    showTabContent()

    tabHeaderItems.addEventListener('click', (e) => {
        const {target} = e
        
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabHeaderItem.forEach((item, i) => {
                if (item === target) {
                    hiddenTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs;