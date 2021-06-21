import React, {useCallback} from 'react';
import styled from 'styled-components';
import VideoLesson from "../VideoLesson";
import ContentLessonTab from "../ContentLessonTab";


const ContentWrapper = styled.div`
  width: 75%;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 992px) {
    width: 100%;
  }

`

interface ContentLessonProp {
    url: string
}

function ContentLesson({url}: ContentLessonProp) {

    const renderVideoLesson = () => <VideoLesson url={url}/>;


    return (
        <ContentWrapper>
            {renderVideoLesson()}
            <ContentLessonTab/>
        </ContentWrapper>
    )
}

export default ContentLesson;