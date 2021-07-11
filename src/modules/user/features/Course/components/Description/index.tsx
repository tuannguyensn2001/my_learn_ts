import { Box } from "@chakra-ui/layout";
import useLocalization from "../../../../../../hooks/useLocalization";
import React, {useState} from "react";
import styled from "styled-components";


const DescriptionCover = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  font-size: 1rem;


  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 150px, white);
  }
`

const DescriptionDefault = styled.div`
  margin-top: 32px;
  padding: 0;
`
const DescriptionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`

const ReadMore = styled.button`
  all: unset;
  margin-top: 16px;
  color: #5624d0;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;

  &:hover{
    color: #401b9c;
    cursor: pointer;
  }

  &:focus{
    outline: none;
  }
`


function Description() {

    const {trans} = useLocalization();

    const [isOpen,setIsOpen] = useState(false);



    const handleOnClick = () => {
        setIsOpen(() => {
            return !isOpen;
        })
    }

    const render = () => {
        if (isOpen){
            return(
                <div>
                    {trans('courseDetailDes.showLess')}
                </div>
            )
        }

        return(
            <div>
                {trans('courseDetailDes.seeMore')}
            </div>
        )
    }

    return(
        <Box>
            <DescriptionDefault className="description container col-xl-6 offset-xl-1 col-lg-9 col-md-10 col-sm-10">
                <DescriptionCover className="description__cover">
                    <DescriptionTitle className="description__title">{trans('courseDetailDes.title')}</DescriptionTitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nam. Dolorum aspernatur deserunt
                    adipisci laborum optio eius iusto ullam ab quibusdam excepturi, tempore sapiente, nemo minus quidem
                    expedita quo unde! Recusandae tenetur amet odio veritatis eos. Deserunt sed soluta pariatur veritatis?
                    Eligendi a quod officia. Officia non delectus soluta voluptates. Nihil aut, veritatis debitis eum,
                    dolores optio maxime ab hic dolore omnis laboriosam molestiae cumque atque! Ipsam obcaecati veritatis
                    recusandae nam a, vitae, assumenda nemo nesciunt officiis quod commodi culpa? Quidem architecto omnis
                    reprehenderit doloremque cum qui aliquam aspernatur dignissimos autem optio nesciunt, inventore, nihil
                    vel, ipsa quasi sint blanditiis quam. Fuga aut numquam eos, hic officiis non alias velit laudantium
                    dicta repellendus accusantium assumenda itaque cupiditate officia. Quae neque recusandae minima sequi,
                    saepe et totam voluptate esse unde soluta suscipit illum nesciunt cum quaerat libero dignissimos, modi
                    amet ullam vero inventore, quo eos delectus ab! Quae quo neque hic dolore necessitatibus reprehenderit,
                    suscipit aliquam sequi accusamus delectus molestiae, id asperiores doloremque! Aperiam dolorum, aliquam
                    illo et ad exercitationem? Recusandae laborum qui velit, asperiores voluptate inventore nulla maxime
                    beatae aperiam quibusdam soluta voluptas earum molestiae laboriosam dicta saepe molestias tenetur
                    facere. Incidunt amet aut aspernatur, ratione aliquid impedit nihil consectetur consequuntur adipisci
                    modi quis aliquam itaque voluptatem optio architecto voluptatum totam pariatur illum ex ipsa quae vitae
                    enim alias! Veniam eaque ipsam dignissimos ratione nobis quo neque blanditiis delectus eum tempora quod,
                    natus quibusdam voluptatibus velit soluta veritatis facilis? In, nesciunt exercitationem eum soluta sunt
                    quis, mollitia sed impedit ab ratione cupiditate et! Rerum, dignissimos et similique beatae eum omnis.
                    Quod fugit ea distinctio, minus quos culpa, accusantium debitis quasi sapiente aspernatur molestias
                    neque sint non vero rerum cum dignissimos dolores, quam possimus odio iure. Tenetur vitae porro deleniti
                    repudiandae, cumque commodi similique veritatis quidem, suscipit recusandae odit, alias nihil?
                </DescriptionCover>
                <ReadMore onClick={handleOnClick} className="read-more">
                    {render()}
                </ReadMore>

            </DescriptionDefault>
        </Box>
    )
}

export default Description;