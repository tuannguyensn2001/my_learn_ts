import React, {useState, FormEvent} from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    Button, Checkbox, Container, TableContainer, Text, CloseButton
} from "@chakra-ui/react"
import {useAppSelector, useAppDispatch} from "../../apps/store";
import Layout from "../../components/Layout";
import {dispatchDeleteCart} from "./slice";

function Cart() {

    const courseList = useAppSelector(state => state.cart.courseList);
    const [selected, setSelected] = useState<number[]>([]);

    const dispatch = useAppDispatch();

    const onChange = (event: any, id: number) => {
        if (event.target.checked) {
            setSelected((prevState): number[] => {
                return [...prevState, id];
            });
        } else {
            setSelected((prevState): number[] => {
                return [...prevState].filter(item => item !== id);
            })
        }
    }

    const totalNumber = (): number => {
        return selected.reduce((total, id): number => {
            const price = courseList.find((item) => item.id === id)?.price || 0;
            return total + price;
        }, 0)
    }

    const onChangeAll = (event: any) => {
        if (event.target.checked) {
            setSelected(courseList.map(item => item.id));
        } else {
            setSelected([]);
        }
    }

    const onDelete = (id: number) => {
        dispatch(dispatchDeleteCart(id)).then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <Layout>

            <Container maxW={'container.xl'}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>
                                <Checkbox onChange={onChangeAll}>Chọn tất cả</Checkbox>
                            </Th>
                            <Th>Tên khóa học</Th>
                            <Th>Giá</Th>
                            <Th>Hành động</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courseList.map(item => (
                            <Tr key={item.id}>
                                <Td>
                                    <Checkbox
                                        onChange={event => onChange(event, item.id)}
                                        isChecked={selected.includes(item.id)}/>
                                </Td>
                                <Td>{item.name}</Td>
                                <Td>
                                    {item.price}
                                </Td>
                                <Td>
                                    <CloseButton onClick={() => onDelete(item.id)}/>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th/>
                            <Th/>
                            <Th>
                                Tổng tiền: {totalNumber()}
                            </Th>
                            <Th>
                                <Button disabled={selected.length === 0}>Mua</Button>
                            </Th>

                        </Tr>
                    </Tfoot>
                </Table>
            </Container>

        </Layout>
    )
}

export default Cart;