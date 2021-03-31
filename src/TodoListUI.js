import React from 'react';
import 'antd/dist/antd.css'
import './style.css'
import { Input, Button, Card } from 'antd'

const TodoListUI = (props) => {
    console.log(props)
    return (
        <Card style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder='请输入员工姓名'
                    value={props.searchInputValue}
                    style={{ width: '200px' }}
                    onChange={props.changeSearchInputValue}
                />
                <Button
                    style={{ marginRight: '30px' }}
                    type="primary"
                    onClick={props.clickSearchBtn}
                >查询</Button>
                <Button
                    style={{ marginRight: '30px' }}
                    type="primary"
                    onClick={props.clickAddBtn}
                >新增成员</Button>
            </div>
            <div style={{ margin: '10px', width: '800px' }}>
                <table width="100%" className="table">
                    <thead>
                        <tr>
                            <th > 员工姓名 </th>
                            <th > 工号 </th>
                            <th > 所属部门 </th>
                            <th > 操作 </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.showList.map((item, index) => {
                            if (item.isSaved) {
                                return (
                                    <tr key={item + index} index={index}>
                                        <td >
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.part}
                                        </td>
                                        <td> <Button onClick={() => { props.deleteItem(index) }} type='link'>删除</Button><Button onClick={() => { props.editItem(index) }} type='link'>编辑</Button></td>
                                    </tr>
                                )
                            }
                            else {
                                return (
                                    <tr key={item + index} index={index}>
                                        <td >
                                            <Input
                                                onChange={props.changeNameInputValue}
                                                value={props.nameInputValue}
                                            />
                                        </td>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>

                                            <Input
                                                onChange={props.changePartInputValue}
                                                value={props.partInputValue}
                                            />

                                        </td>
                                        <td> <Button onClick={() => { props.deleteItem(index) }} type='link'>删除</Button><Button onClick={() => { props.saveItem(index) }} type='link'>保存</Button></td>
                                    </tr>
                                );
                            }

                        })}

                    </tbody>

                </table>

            </div>
        </Card>
    );
}

export default TodoListUI;