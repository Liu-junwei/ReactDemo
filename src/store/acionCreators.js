import { CHANGE_SEARCH_INPUT, CHANGE_NAME_INPUT, CHANGE_PART_INPUT, ADD_ITEM, SEARCH_ITEM, SAVE_ITEM, DELETE_ITEM, EDIT_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeSearchInputAction = (value) => ({
    type: CHANGE_SEARCH_INPUT,
    value
})
export const changeNameInputAction = (value) => ({
    type: CHANGE_NAME_INPUT,
    value
})

export const changePartInputAction = (value) => ({
    type: CHANGE_PART_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})
export const searchItemAction = () => ({
    type: SEARCH_ITEM
})
export const saveItemAction = (index) => ({
    type: SAVE_ITEM,
    index
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const editItemAction = (index) => ({
    type: EDIT_ITEM,
    index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://mock.mengxuegu.com/mock/605c02390d58b864da03d9ac/getList/getTableSource')
            .then((res) => {
                const data = res.data
                const action = getListAction(data)
                dispatch(action)
            })
    }
}