import Sidebar from "../../components/Sidebar";
import {Flex, Text, IconButton, Box} from '@chakra-ui/react'
import {FiMenu} from 'react-icons/fi'

function Dashboard() {


    return (
        <Flex w="100%">
            <Sidebar/>
            {/*<Flex*/}
            {/*    pos="absolute"*/}
            {/*    top="50%"*/}
            {/*    left="50%"*/}
            {/*    transform="translate(-50%, -50%)"*/}
            {/*>*/}
            {/*    <Text>Click the*/}
            {/*        <IconButton*/}
            {/*            background="none"*/}
            {/*            _hover={{background: 'none'}}*/}
            {/*            icon={<FiMenu/>}*/}
            {/*            aria-label={'hihi'}/>*/}
            {/*        to resize the vertical navigation bar.</Text>*/}
            {/*</Flex>*/}
            <Box marginLeft={'50px'}>
                <p>Hhi</p>
            </Box>
        </Flex>
    )
}

export default Dashboard;