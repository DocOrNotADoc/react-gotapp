// return из метода renderItems, как у Вас в уроке, но вместо id в метод onCharSelected
//я передаю самого персонажа (идентификатор я потом тоже передал, чтобы установить класс активности
//уже в список, просто разукрасить элемент, т.е. это не связано с вопросом)
<li 
    key={`list-item-${nextId()}`} 
    className={clazz}
    onClick={() => this.onCharSelected(i, item)}>
    {item.name}
</li>

// метод onCharSelected, и он находится у меня в компоненте ItemList
//опять же только для того, чтобы закрасить активного персонажа, в метод getActiveItem,
//который находится в компоненте App передаётся только сам персонаж
onCharSelected = (i, item) => {
    this.setState({
        active: i
    })
    this.props.getActiveItem(item)
}

// Ну, с этим методом итак всё ясно, он просто записывает данные
//в state, которые после в виде объекта data передаются в компонент CharDetails
getActiveItem = (activeItem) => {
    this.setState({activeItem})
}


// В CharDetails мы их просто получаем, даже не описывая никакие методы
const {data: {name, gender, born, died, culture}} = this.props