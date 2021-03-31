import { CHANGE_SEARCH_INPUT, CHANGE_NAME_INPUT, CHANGE_PART_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, SEARCH_ITEM, SAVE_ITEM, EDIT_ITEM } from './actionTypes'
const defaultState = {
    searchInputValue: '',
    nameInputValue: '',
    idInputValue: '',
    partInputValue: '',
    list: [

    ],
    showList: [

    ]
}

const states = (state = defaultState, action) => {

    //Reducer里只能接收state，不能改变state
    if (action.type === CHANGE_SEARCH_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.searchInputValue = action.value
        return newState
    }
    if (action.type === CHANGE_NAME_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.nameInputValue = action.value
        return newState
    }
    if (action.type === CHANGE_PART_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.partInputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {

        let newState = JSON.parse(JSON.stringify(state))
        let id = newState.list[newState.list.length - 1].id
        newState.showList.push({ name: '', id: id + 1, part: '', isSave: false })
        newState.list.push({ name: '', id: id + 1, part: '', isSave: false })

        return newState
    }
    if (action.type === SAVE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.showList[action.index].name = newState.nameInputValue
        newState.showList[action.index].part = newState.partInputValue
        newState.showList[action.index].isSaved = true
        let id = newState.showList[action.index].id

        for (let i = 0; i < newState.list.length; i++) {
            if (newState.list[i].id === id) {
                newState.list[i].name = newState.showList[action.index].name
                newState.list[i].part = newState.showList[action.index].part
                newState.list[i].isSaved = newState.showList[action.index].isSaved
                break;
            }
        }
        newState.nameInputValue = ''
        newState.partInputValue = ''

        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))

        console.log('这个是index的值' + action.index)
        let id = newState.showList[action.index].id
        for (let i = 0; i < newState.list.length; i++) {
            if (newState.list[i].id === id) {
                newState.list.splice(i, 1)
                break;
            }
        }
        newState.showList.splice(action.index, 1)


        return newState
    }
    if (action.type === EDIT_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.nameInputValue = newState.showList[action.index].name
        newState.idInputValue = newState.showList[action.index].id
        newState.partInputValue = newState.showList[action.index].part
        newState.showList[action.index].isSaved = false

        return newState
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        newState.showList = action.data.data.list
        return newState
    }
    if (action.type === SEARCH_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        let searchName = newState.searchInputValue

        let reg = new RegExp(searchName);
        newState.showList = newState.list.filter((item) => { return reg.test(item.name) });

        return newState
    }

    return state
}
export default states