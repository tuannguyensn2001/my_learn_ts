import styled from 'styled-components';
import useLocalization from "../../../../../../hooks/useLocalization";
import { Box, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

const InsPos = styled.div`
    font-size: 1rem;
    text-indent: 16px;
`

const InsDes = styled.div`
    margin-top: 8px;
    text-indent: 16px;
    padding-bottom: 64px;
`

function Instructor() {

    const {trans} = useLocalization();

    return(
        <Box 
            className="instructor"
            mt='36px'>
            <Box 
                className="ins__title"
                fontSize='1.5rem'
                fontWeight='700'>{trans('courseDetailInstructor.title')}</Box>
            <Box 
                className="ins__cover"
                pt='12px'>
                <Flex 
                    className="ins__name-cover"
                    mx={{base: 'auto', sm: 'auto', md: '0'}}
                    width='fit-content'
                    flexDir='column'>
                    <Box
                        className="ins__name"
                        fontSize='1.5rem'
                        fontWeight='700'
                        color='#5624d0'>Jose Portilla</Box>
                    <InsPos className="ins__pos">Mô tả ngắn</InsPos>
                </Flex>
                <Flex 
                    className='ins__info'
                    mt='.5rem'
                    justifyContent='space-around'
                    flexWrap='wrap'>
                    {/* Put picture here (height == width) */}
                    <Image 
                        className="ins__picture"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEVCwPs5vvue3v2o4v205v6/6v7K7f7V8f6h3/3i9f4xvPsouvuY3f39/v/1+//q+P+45/5GFGvPAAABa0lEQVR4nO3dSU7DABBFQWdwBidA7n9avGABYkEUKQplvzrBf/uWenh7/zgfj8fDbJztv+x+Om0fddr9aX+P23iPwy/nYbxM323+q+kxl+swTsOSbbYrKLwtvnC/efWIp6rQV6GvQl+Fvgp9Ffrmwl2Ftgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfKgq3Fdoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6FtF4Wnxhcu/GKoQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb5VfGGpEFehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8uHKdXj3iqCn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9FfrmwkOFtgp9Ffoq9FXoq9BXoa9C3zoKL5slm67D+bpdsuvhE57nEnPutj/JAAAAAElFTkSuQmCC"
                        alt="Teacher A"
                        mx={{base: 'auto', sm: 'inherit'}}
                        width={{base: '80%', sm: '50%', md: '30%'}}
                        borderRadius='50%'/>
                    <Box 
                        className='ins__overview'
                        textTransform='capitalize'
                        mx={{base: 'auto', md: 'inherit'}}
                        fontSize='1rem'>
                        <Box
                            className='overview__info'
                            line-height='30px'>Some sort of knowledge
                        </Box>
                        <Box
                            className='overview__info'
                            line-height='30px'>Some sort of knowledge
                        </Box>
                        <Box
                            className='overview__info'
                            line-height='30px'>Some sort of knowledge
                        </Box>
                        <Box
                            className='overview__info'
                            line-height='30px'>Some sort of knowledge
                        </Box>
                    </Box>
                </Flex>
                <InsDes className="ins__des">
                    Mô tả chi tiết
                </InsDes>
            </Box>
        </Box>
    )
}

export default Instructor;