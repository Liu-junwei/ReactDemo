import React, { Component } from 'react';
import store from './store'
import { addItemAction, searchItemAction, changeSearchInputAction, changeNameInputAction, changePartInputAction, saveItemAction, deleteItemAction, editItemAction, getTodoList } from './store/acionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {

    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeSearchInputValue = this.changeSearchInputValue.bind(this)

        this.changeNameInputValue = this.changeNameInputValue.bind(this)

        this.changePartInputValue = this.changePartInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickSearchBtn = this.clickSearchBtn.bind(this)
        this.clickAddBtn = this.clickAddBtn.bind(this)
        this.savaItem = this.saveItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <TodoListUI
                searchInputValue={this.state.searchInputValue}
                nameInputValue={this.state.nameInputValue}

                partInputValue={this.state.partInputValue}
                changeSearchInputValue={this.changeSearchInputValue}
                changeNameInputValue={this.changeNameInputValue}
                changeIdInputValue={this.changeIdInputValue}
                changePartInputValue={this.changePartInputValue}
                clickAddBtn={this.clickAddBtn}
                clickSearchBtn={this.clickSearchBtn}
                showList={this.state.showList}
                saveItem={this.saveItem}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
            />
        );
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    changeSearchInputValue(e) {
        const action = changeSearchInputAction(e.target.value)
        store.dispatch(action)
    }
    changeNameInputValue(e) {
        const action = changeNameInputAction(e.target.value)
        store.dispatch(action)
    }

    changePartInputValue(e) {
        const action = changePartInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }
    clickSearchBtn() {
        const action = searchItemAction()
        store.dispatch(action)
    }
    clickAddBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    saveItem(index) {

        const action = saveItemAction(index)
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    editItem(index) {
        const action = editItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;