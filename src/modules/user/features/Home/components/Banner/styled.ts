import styled from "styled-components";

interface BannerWrapperProp {

}

const BannerWrapper = styled.div<BannerWrapperProp>`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  //background-position: center;
  background-image: url("https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerContent = styled.div`
  font-weight: 600;
  text-align: center;
`
const BannerWelcome = styled.h2`
  color: #fff;
  text-shadow: 0 0 6px rgb(0 0 0);
  font-weight: 500;
`

const BannerTitle = styled.h1`
  color: #fff;
  text-shadow: 0 0 6px rgb(0 0 0);
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 700;
`

const BannerButtonCover = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const BannerButton = styled.button`
  all: unset;
  background-color: rgba(255 255 255 / 10%);
  border: 1px solid rgba(255 255 255 / 80%);
  color: #fff;
  padding: .8rem;
  margin-top: 2px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 20px;
  width: 60%;

  &:focus {
    outline: none !important;
  }

  &:hover {
    text-shadow: 0 0 6px rgb(0 0 0);
    backdrop-filter: contrast(.5);
  }
`


const styles = {
    BannerWrapper,
    BannerContent,
    BannerWelcome,
    BannerTitle,
    BannerButtonCover,
    BannerButton
}

export default styles;