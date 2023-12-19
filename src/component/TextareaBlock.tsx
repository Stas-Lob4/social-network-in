import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from 'react';
import styled from 'styled-components';

type TextareaBlock = {
    onClick: (text: string) => void
}
export const
    TextareaBlock: React.FC<TextareaBlock> = ({onClick}) => {
    const [text, setText] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        setText(newText)
    }

    const onClickHandler = () => {
        if(text.trim() !== ''){
            setText('')
            onClick(text)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            onClickHandler()
        }
    }

    return (
        <TextAreaBlockStyled>
            <Textarea onChange={onChangeHandler} value={text} onKeyPress={onKeyPressHandler}></Textarea>
            <TextareaButton onClick={onClickHandler}>+</TextareaButton>
        </TextAreaBlockStyled>
    );
};

export const TextAreaBlockStyled = styled.div`
    
`

export const Textarea = styled.textarea`

`

export const TextareaButton = styled.button`

`