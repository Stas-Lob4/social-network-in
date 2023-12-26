import React, {FC, useEffect, useState} from 'react';
import {ErrorTitle} from '../../component/ErrorTitle';
import {useAppSelector} from '../../app/store';
import {HashLoader} from 'react-spinners';
import {LoaderContainer} from '../chat/ChatStyled';
import {dialogsThunks} from '../../redux/thunks/dialogsThunk';
import {useActions} from '../../hooks/useActions';
import {DialogsStyled} from './DialogsStyles';
import {Dialog} from './Dialog/Dialog';
import {DialogsUsersList} from './DialogsUsersList/DialogsUsersList';
import {Navigate} from 'react-router-dom';


type PropsType = {

}
export const Dialogs: FC<PropsType> = React.memo(({}) => {
    const dialogs = useAppSelector(state => state.dialogReducer.dialogs)
    const status = useAppSelector(state => state.appReducer.status)
    const isAuth = useAppSelector(state => state.authReducer.isAuth)
    const [userMessageId, setUserMessageId] = useState<null | number>(null);
    const {
        fetchDialogs,
        addMessage,
        deleteMessage,
        fetchMessages
    } = useActions({...dialogsThunks})


    const addMessageHandler = (userId: number, text: string) => {
        addMessage({id: userId, text})
    }
    const deleteMessageHandler = (messageId: string) => {
        deleteMessage(messageId)
    }
    useEffect(() => {
        if(userMessageId !== null){
            fetchMessages(userMessageId)
        }
    }, [userMessageId]);

    useEffect(() => {
        if(dialogs.length === 0){
            fetchDialogs()
        }
    }, []);

    const onClickHandler = (id: number) => setUserMessageId(id)

    if (status === 'loading') {
        return <DialogsStyled>
            <LoaderContainer>
                <HashLoader size={250}/>
            </LoaderContainer>
        </DialogsStyled>
    } else if (dialogs.length === 0) {
        return <DialogsStyled>
            <ErrorTitle title={'no dialogs'}/>
        </DialogsStyled>
    }

    if(!isAuth){
        return <Navigate to={'/login'}/>
    }

    return <DialogsStyled>
        <DialogsUsersList onClickCallBack={onClickHandler}/>
        {!!userMessageId
            ? <Dialog id={userMessageId}
                      addNewMessage={addMessageHandler}
                      deleteMessage={deleteMessageHandler}
            />
            : <ErrorTitle title={'Select dialogue'}/>
        }
    </DialogsStyled>
})






