import {Link} from "react-router-dom";
import styled from "styled-components";

const CourseItem = styled.div`
  width: 100%;
  height: 400px;
  background: #fff;
  box-shadow: 0px 10px 23px -8px rgb(0 0 0 / 11%);
  overflow: hidden;
  border-radius: 3%;
`

const ThumbnailWrapper = styled.div`
  height: 55%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;


`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  transition: all .3s ease;


  &:hover {
    transform: scale(1.2);

  }
`

const Category = styled(Link)`
  position: absolute;
  left: 20px;
  background: #4986fc;
  color: #fff;
  bottom: 0px;
  z-index: 1;
  padding: 2px 10px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

`

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
`

const Title = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
`

const Instructor = styled.div`
  text-decoration: none;
  color: #4986fc;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: 500;

`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`

const User = styled.div`

`

const Price = styled.div`

`

const styles = {
    CourseItem,
    ThumbnailWrapper,
    Thumbnail,
    Category,
    ContentWrapper,
    Title,
    Instructor,
    Info,
    User,
    Price
}

export default styles;