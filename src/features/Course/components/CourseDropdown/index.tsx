import React, {useState} from 'react';
import styled from "styled-components";
import {IChapter} from "../../../../models/IChapter";
import CourseDropdownItem from "../CourseDropdownItem";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";


interface CourseDropdownProp {
    chapter: IChapter
}

const CourseDropdownWrapper = styled.div`
  width: 100%;
  margin-top: 15px;


`

const CourseDropdownContent = styled.div`
  background-color: #f4f4f4;
  padding: 12px 25px 12px 45px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(240, 81, 35, .15);

  &:hover {
    cursor: pointer;
  }
`

const CourseDropdownTitle = styled.div`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;
  font-weight: 500;
  font-size: 18px;
`
const CourseDropdownIcon = styled.i`
  color: blue;
  margin-right: 10px;
`

const CourseDropdownLesson = styled.div`

`

function CourseDropdown({chapter}: CourseDropdownProp) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickDropdown = () => {
        setIsOpen(!isOpen);
    }

    const icon = !isOpen ? <AddIcon h={3}/> : <MinusIcon h={3}/>

    return (
        <CourseDropdownWrapper>
            <CourseDropdownContent onClick={clickDropdown}>
                <CourseDropdownTitle>
                    <CourseDropdownIcon/>
                    <div>
                        <span>
                            {icon}
                        </span>
                        {chapter.order}
                        : {chapter.name}</div>
                </CourseDropdownTitle>
                <CourseDropdownLesson>
                    bla bla bla
                </CourseDropdownLesson>
            </CourseDropdownContent>

            {isOpen && chapter?.lessons?.map(lesson => (
                <CourseDropdownItem lesson={lesson}/>
            ))}

        </CourseDropdownWrapper>
    )
}

export default CourseDropdown;