import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {
    Layout, Menu, Button, theme, Typography,
    Table, InputNumber, Form, Input, Popconfirm, Modal, Image, Space
} from 'antd';
import { FaClipboardList } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import './style.scss'
import images from '../../assets/images';
import axios from 'axios';
import baseUrl, { addCategory, deleteCategory, editCategory, getAllCategory, login } from '../../utils/api/apiList';
const { Header, Sider, Content } = Layout;
const { Title } = Typography

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    //add
    const [isModalOpen, setIsModalOpen] = useState(false)
    //edit
    const [form] = Form.useForm()
    const [editingKey, setEditingKey] = useState('')

    //fakeloggin
    useEffect(() => {
        const user = {
            "email": "admin@gmail.com",
            "password": "admin1"
        }
        axios.post(baseUrl + login, user, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                res.status === 200 && localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }, [])

    //table
    const [dataCategory, setDataCategory] = useState(null)
    const fetchData = () => {
        const token = localStorage.getItem('token')
        axios.post(baseUrl + getAllCategory, {}, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            }
        })
            .then(res => {
                const newData = res.data.data.map((item, index) => ({
                    ...item,
                    key: index.toString(),
                }))
                setDataCategory(newData)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])

    //edit
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        )
    }
    const isEditing = (record) => record._id === editingKey
    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            ...record,
        })
        setEditingKey(record._id)
    }
    const cancel = () => {
        setEditingKey('')
    }
    const save = async (key) => {
        try {
            const row = await
                form.validateFields()
                    .then(value => {
                        const token = localStorage.getItem('token')
                        axios.post(baseUrl + editCategory, { name: value.name.trim(), idDanhMuc: key }, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: token,
                            },
                        })
                            .then(res => {
                                console.log(res)
                                res.status === 200 && fetchData()
                            })
                            .catch(err => console.error(err))
                    })
                    .catch()
            const newData = [...dataCategory]
            const index = newData.findIndex((item) => key === item._id)
            if (index > -1) {
                const item = newData[index]
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                })
                setDataCategory(newData)
                setEditingKey('')
            } else {
                newData.push(row)
                setDataCategory(newData)
                setEditingKey('')
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo)
        }
    }

    //add
    const showModal = () => {
        form.resetFields()
        setIsModalOpen(true)
    }
    const handleOk = () => {
        form.validateFields()
            .then(value => {
                const token = localStorage.getItem('token')
                axios.post(baseUrl + addCategory, { name: value.tendanhmuc.trim() }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                })
                    .then(res => {
                        res.status === 200 && fetchData()
                    })
                    .catch(err => console.error(err))
            })
            .catch()
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    //delete
    const handleDelete = (id) => {
        const token = localStorage.getItem('token')
        axios.post(baseUrl + deleteCategory, { idDanhMuc: id }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            }
        })
            .then(() => {
                fetchData()
            })
            .catch(err => console.log(err))
    }

    //column
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            width: '70%',
            editable: true,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                const editable = isEditing(record)
                return (
                    <Space size="middle">
                        {editable ? (
                            <span>
                                <Typography.Link
                                    onClick={() => save(record._id)}
                                    style={{
                                        marginRight: 8,
                                    }}
                                >
                                    Save
                                </Typography.Link>
                                <Button type="link" onClick={cancel}>Cancel</Button>
                            </span>
                        ) : (
                            <Button type="link" disabled={editingKey !== ''} onClick={() => edit(record)}>
                                Edit
                            </Button>
                        )}
                        {editable ? <></> : <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="text" danger>
                                Delete
                            </Button>
                        </Popconfirm>}
                    </Space>
                )
            },
        }
    ]
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        }
    })

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <Image className='logo-image' src={images.logo} preview={false}></Image>
                </div>
                <Menu
                    className='menu'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <FaClipboardList />,
                            label: 'Danh Mục',
                        },
                        {
                            key: '2',
                            icon: <BsHouseDoor />,
                            label: 'Kiot',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Notifications',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='header'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Button className='btn-logout' type="primary" danger ghost>LogOut</Button>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <div>
                        <div className='wraper-title'>
                            <Title level={4} style={{ marginTop: 0 }}>Danh mục sản phẩm</Title>
                            <Button onClick={showModal}>Thêm danh mục</Button>
                        </div>
                        <Form form={form} component={false}>
                            <Table
                                components={{
                                    body: {
                                        cell: EditableCell,
                                    },
                                }}
                                bordered
                                dataSource={dataCategory}
                                columns={mergedColumns}
                                rowClassName="editable-row"
                                pagination={{
                                    // onChange: cancel,
                                    pageSize: 8,
                                }}
                            />
                        </Form>
                    </div>
                </Content>
            </Layout>

            <Modal form={form} title="Thêm danh mục" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="dynamic_form_complex"
                    autoComplete="off"
                    initialValues={{
                        items: [{}],
                    }}
                >
                    <Form.Item
                        label="Tên danh mục"
                        name="tendanhmuc"
                        rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

        </Layout>
    )
}
export default App