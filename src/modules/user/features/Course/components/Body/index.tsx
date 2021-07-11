import React from "react";
import useLocalization from "../../../../../../hooks/useLocalization";
import { Box, Flex } from "@chakra-ui/layout";

export default function Body() {

    const {trans} = useLocalization();

    return (
        <Box 
        className= 'des-box'
        background= '#f7f9fa'
        color= '#000'
        border= '1px solid #ccc'
        borderRadius= '4px'
        mt= '48px'
        padding= '0px 20px'>
            <Box
            className= 'des-box__heading'
            fontSize= '1.5rem'
            fontWeight= '700'
            margin= '16px 0'>{trans('courseDetailBody.title')}</Box>
            <Box 
            className="des-box__body"
            mb='16px'>
                <Flex 
                className="body__cover"
                mb='8px'
                justifyContent= 'space-between'
                color= '#1c1d1f'>
                    <Box
                    className="body__cover-col"
                    width= '100%'
                    fontSize= '1rem'>
                        <i className="check-icon fal fa-check"></i>Something
                    </Box>
                    <Box 
                    className="body__cover-col"
                    width= '100%'
                    fontSize= '1rem'>
                        <i className="check-icon fal fa-check"></i>Something
                    </Box>
                </Flex>
                <Flex 
                className="body__cover"
                mb='8px'
                justifyContent= 'space-between'
                color= '#1c1d1f'>
                    <Box 
                    className="body__cover-col"
                    width= '100%'
                    fontSize= '1rem'>
                        <i className="check-icon fal fa-check"></i>Something
                    </Box>
                    <Box 
                    className="body__cover-col"
                    width= '100%'
                    fontSize= '1rem'>
                        <i className="check-icon fal fa-check"></i>Something
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}