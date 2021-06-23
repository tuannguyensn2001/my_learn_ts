import {useState} from 'react'
import {Box, useBreakpointValue} from '@chakra-ui/react'

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const smVariant = {navigation: 'drawer', navigationButton: true}
const mdVariant = {navigation: 'sidebar', navigationButton: false}


function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const variants = useBreakpointValue({base: smVariant, md: mdVariant})

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)



    return (
        <>

            <Sidebar
                // @ts-ignore
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
            />
            <Box
                // @ts-ignore
                ml={!variants?.navigationButton && 200}>
                <Header
                    showSidebarButton={variants?.navigationButton}
                    onShowSidebar={toggleSidebar}
                />
            </Box>
        </>
    )
}

export default Dashboard;