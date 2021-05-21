// import React from 'react';
// import CharList from './charList';
// import BooksList from './booksList';
// import HousesList from './housesList';
// import {mount} from 'enzyme';
// import GotService from '../../services/gotService';

// describe('Testing <CharList/>', () => {
//   const service = new GotService();
//   const list = mount(<CharList
//                       getData={service.getAllHouses}
//                       renderItem={({name}) => name}/>)

//   it('Click on item list must rerender all list in one instance', () => {
//     list.setState({itemList: [{name: "dlf", id: 1}, {name: "slf", id: 2}]});
//     // list.find('.list-group-item:first-child').simulate('click');
//     // // в моём варианте все списки на styled-components. Поэтому получить элемент по классу или тегу не выходит
//     // // list.find('option:first-child').simulate('click');
//     expect(list.find('ul')).toHaveLenght(1);
//   });
// });