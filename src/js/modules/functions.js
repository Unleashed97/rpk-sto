export const handleTabs = () => {
    const tabsBtnList = document.querySelectorAll('.tabs__btn')
    const tabsContentItems = document.querySelectorAll('.tabs__content-item')

    tabsBtnList.forEach((btn, index) =>
        btn.addEventListener('click', () => {
            tabsBtnList.forEach((btn) => btn.classList.remove('active'))
            tabsContentItems.forEach((contentItem) =>
                contentItem.classList.remove('active'),
            )

            btn.classList.add('active')
            tabsContentItems[index].classList.add('active')
        }),
    )
}
