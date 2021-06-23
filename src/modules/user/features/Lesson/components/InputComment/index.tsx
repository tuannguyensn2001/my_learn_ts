import {useState, useRef} from "react";
import {useAppSelector} from "../../../../../../apps/store";
import {Avatar, Textarea, Button} from "@chakra-ui/react";
import styled from "styled-components";


const Comment = styled.div`
  display: flex;
`

const TextareaWrapper = styled.textarea`
  width: 500px;
  height: auto;
  resize: none;
  overflow-y: hidden;
`

const BoxWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 40px;
  background: #fff;
  margin-left: 10px;
  //margin: auto;
  transition: all 0.2s;
  padding: 8px;

  border-bottom: 1px solid #ccc;;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }

  &[placeholder]:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const DivBoxWrapper = styled.div`
  width: 100%;
`

const CancelButton = styled(Button)`
  border-radius: 0;
`

const SaveButton = styled(Button)`
  border-radius: 0;
  background-color: #fc9e83;
  color: #fff;

  &:hover {
    background-color: blue;
  }
`

interface InputCommentProp {
    submit(comment: string): void
}

function InputComment({submit}: InputCommentProp) {

    const {user} = useAppSelector(state => state.auth);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const input = useRef<HTMLDivElement>(null);

    const handleClickComment = () => setIsOpen(true);

    const handleClickCancel = () => {
        setIsOpen(false);
        if (input?.current?.innerText) {
            input.current.innerText = '';
        }
    }

    const handleOnInputComment = (event: any) => {
        if (event?.target?.textContent.trim() !== '') setIsDisabled(false);
        else setIsDisabled(true);
    }

    const onComment = () => {
        if (input?.current?.innerText) {
            const value: string = input.current.innerText;
            submit(value);
            input.current.innerText = ''.trim();
            setIsDisabled(true);
        }
    }

    const handleOnKeyDown = (event: any) => {
        if (event?.keyCode === 13 && input?.current?.innerText) {
            const value: string = input.current.innerText;
            submit(value);
            input.current.innerText = ''.trim();
            setIsDisabled(true);
        }
    }

    return (
        <div style={{
            width: '600px'
        }
        }>
            <Comment>
                <div>
                    <Avatar w={10} h={10} src={user?.profile?.media?.source}/>
                </div>
                <DivBoxWrapper>
                    {/*<TextareaWrapper/>*/}
                    <BoxWrapper
                        onInput={handleOnInputComment}
                        onKeyUp={handleOnKeyDown}
                        ref={input}
                        onClick={handleClickComment}
                        placeholder={'Thắc mắc gì ko e'}
                        className="box"
                        contentEditable={true}
                    />
                </DivBoxWrapper>
            </Comment>
            <div>
                {isOpen &&
                <ButtonWrapper>
                    <CancelButton
                        onClick={handleClickCancel}
                        variant={'unstyle'}
                        border={'none'}
                        _hover={{
                            bg: '#ebebeb',
                            color: '#777'
                        }}
                        size={'sm'}

                        style={{
                            marginRight: '10px'
                        }}>Hủy</CancelButton>
                    <SaveButton
                        onClick={onComment}
                        size={'sm'}
                        isDisabled={isDisabled}
                        _hover={{
                            bg: 'blue'
                        }}

                    >Bình luận</SaveButton>
                </ButtonWrapper>
                }
            </div>
        </div>
    )
}

export default InputComment;