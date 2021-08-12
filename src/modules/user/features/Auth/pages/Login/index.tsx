import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../../../apps/store";
import Layout from "../../../../components/Layout";
import {ToastStatus} from "../../../../../../defines/toast";
import useLocalization from "../../../../../../hooks/useLocalization";
import {dispatchLogin} from "../../slice";
import {useHistory} from 'react-router-dom';


interface IFormInput {
    email: string,
    password: string
}

export default function Login() {

    const {trans} = useLocalization();

    const history = useHistory();

    const toast = useToast();

    const dispatch = useAppDispatch();

    const {register, handleSubmit} = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        handleLogin(data)
            .then(data => {
                history.push('/');
                toast({
                    title: ` toast`,
                    status: ToastStatus.SUCCESS,
                    isClosable: true,
                });

            })
            .catch(err => {
                toast({
                    title: ` toast`,
                    status: ToastStatus.ERROR,
                    isClosable: true,
                })
            });
    }

    const handleLogin = async (user: IFormInput) => {
        const resultAction = await dispatch(dispatchLogin(user));
        if (dispatchLogin.fulfilled.match(resultAction)) {
            return resultAction;
        } else {
            throw resultAction;
        }

    }

    return (
        <Layout>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>{trans('auth.login')}</Heading>
                            <Text fontSize={'lg'} color={'gray.600'}>
                                {trans('auth.join_us')}✌️
                            </Text>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>{trans('auth.email')}</FormLabel>
                                    <Input type="email" {...register('email', {
                                        required: true,
                                    })}/>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>{trans('auth.password')}</FormLabel>
                                    <Input type="password" {...register('password', {
                                        minLength: 6
                                    })}/>
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{base: 'column', sm: 'row'}}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={'blue.400'}>Forgot password?</Link>
                                    </Stack>
                                    <Button
                                        type={'submit'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </form>
            </Flex>
        </Layout>
    );
}