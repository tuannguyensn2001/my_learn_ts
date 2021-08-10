import Layout from "../../../components/Layout";
import {Box, Flex} from "@chakra-ui/layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Image,
    Input,
    Select,
    SimpleGrid
} from "@chakra-ui/react"
import {useTranslation} from "react-i18next";
import {useMutation, useQuery} from "react-query";
import {CourseCreateForm, GetCourseCreateType} from "../type";
import {getCourseCreate} from "../repositories";
import {AxiosError, AxiosResponse} from "axios";
import {Response} from "../../../../../defines/Response";
import {useForm} from "react-hook-form";
import {useRef} from "react";
import {fetchUploadFile} from "../../../../../services";

function CourseCreate() {


    const {t} = useTranslation();

    const {data: courseCreate} = useQuery<GetCourseCreateType, AxiosError<Response<GetCourseCreateType>>>('course_create', async () => {
        return await getCourseCreate();
    });

    const uploadFile = useMutation<Response<any>, AxiosError<Response<any>>, FormData>('uploadFile', async (form: FormData) => {
        const response: AxiosResponse = await fetchUploadFile(form);
        return response.data;
    })

    const {register, handleSubmit} = useForm<CourseCreateForm>();

    const file = useRef<HTMLInputElement>(null);

    const submit = (data: CourseCreateForm) => {
        console.log(data);
    }

    const handleClickFile = () => {
        if (!file) return;
        file?.current?.click();
    }

    const handleChangeFile = () => {

        if (!file?.current?.files) return;

        // if (!Array.isArray(file.current.files)) return;

        const image = file.current.files[0];

        const formData = new FormData();

        formData.append('file', image);
        formData.append('type', 'COURSE');

        console.log(1);
        uploadFile.mutate(formData)

    }

    return (
        <Layout>
            <Box>
                <Flex pl={50} flexDirection={'column'} justify={'center'} bg={'#ffffff'} h={50}>
                    <Box>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </Flex>

                <Box ml={{xl: 185, lg: 100}} mr={{xl: 185, lg: 100}} mt={30} bg={'#ffffff'}>
                    {/*<Box>*/}
                    {/*    <Text>Thêm mới khóa học</Text>*/}
                    {/*</Box>*/}

                    <Box mt={50}>
                        <Container p={10} maxW="container.xl">
                            <form onSubmit={handleSubmit(submit)}>

                                <Grid
                                    h="200px"
                                    templateRows="repeat(3, 1fr)"
                                    templateColumns="repeat(6, 1fr)"
                                    gap={4}
                                >
                                    <GridItem colSpan={2}>
                                        <Box>
                                            <FormControl id="email">
                                                <FormLabel>{t('backend.course.name')}</FormLabel>
                                                <Input type="text" {...register('name')}/>
                                            </FormControl>
                                        </Box>
                                    </GridItem>

                                    <GridItem colSpan={2}>
                                        <Box>
                                            <FormControl id="email">
                                                <FormLabel>{t('backend.course.description')}</FormLabel>
                                                <Input type="text" {...register('description')}/>
                                            </FormControl>
                                        </Box>
                                    </GridItem>

                                    <GridItem rowSpan={2} colSpan={2}>
                                        <input onChange={handleChangeFile} ref={file} type="file" hidden/>
                                        <Flex justify={'space-evenly'} h={'100%'}>
                                            <Box
                                                onClick={handleClickFile}
                                                w={'60%'}
                                                _hover={{cursor: 'pointer'}}
                                            >
                                                <Image
                                                    w={'80%'}
                                                    h={'100%'}
                                                    src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
                                                    alt="Segun Adebayo"/>
                                            </Box>
                                        </Flex>
                                    </GridItem>

                                    <GridItem colSpan={2}>
                                        <Box>
                                            <FormControl id="email">
                                                <FormLabel>{t('backend.course.price')}</FormLabel>
                                                <Input type="text" {...register('price')}/>
                                            </FormControl>
                                        </Box>
                                    </GridItem>

                                    <GridItem colSpan={2}>
                                        <Box>
                                            <FormControl>
                                                <FormLabel>{t('backend.course.level')}</FormLabel>
                                                <Select {...register('level')}
                                                        placeholder={t('backend.course.choose_level')}>
                                                    {courseCreate?.level?.map(item => (
                                                        <option value={item.value}
                                                                key={item.value}>{item.label}</option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </GridItem>


                                </Grid>

                                <SimpleGrid columns={3} spacing={8}>

                                    <Box>
                                        <FormControl>
                                            <FormLabel>{t('backend.course.status')}</FormLabel>
                                            <Select {...register('status')}
                                                    placeholder={t('backend.course.choose_status')}>
                                                {courseCreate?.status?.map(item => (
                                                    <option value={item.value} key={item.value}>{item.label}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <Box>
                                        <FormControl>
                                            <FormLabel>{t('backend.course.tags')}</FormLabel>
                                            <Select {...register('tag_id')}
                                                    placeholder={t('backend.course.choose_tags')}>
                                                {courseCreate?.tags?.map(item => (
                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </SimpleGrid>


                                <Flex justify={'flex-end'} mt={10}>
                                    <Box>
                                        <Button type={'submit'}
                                                colorScheme={'blue'}>{t('system.action.create')}</Button>
                                    </Box>
                                </Flex>


                            </form>
                        </Container>
                    </Box>

                </Box>

            </Box>
        </Layout>
    )
}

export default CourseCreate;