import React, {FC, useState} from 'react';
import {Dialog} from './Dialog/Dialog';
import {DialogsStyled} from './DialogsStyles';
import {DialogsUsersList} from './DialogsUsersList/DialogsUsersList';
import {DialogType} from '../../../redux/reducers/dialogReducer';
import {ErrorTitle} from '../../../component/ErrorTitle';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {RequestStatusType} from '../../../redux/reducers/appReducer';
import {HashLoader} from 'react-spinners';


type PropsType = {
    dialogs: DialogType[]
    updateNewMessageText: (userId: number, text: string) => void
    addNewMessage: (userId: number,text: string) => void
    deleteMessage: (messageId: string) => void
}

export const Dialogs: FC<PropsType> = (props) => {
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.appReducer.status)
    const [userMessageId, setUserMessageId] = useState<null|number>(null);

    const onClickHandler = (id: number) => setUserMessageId(id)

    if(appStatus === 'loading'){
        return <HashLoader size={300}/>
    } else if(props.dialogs.length === 0) {
        return <DialogsStyled>
            <ErrorTitle title={'no dialogs'}/>
        </DialogsStyled>
    }

    return <DialogsStyled>
        <DialogsUsersList dialogs={props.dialogs} onClickCallBack={onClickHandler}/>
        {!!userMessageId
            ?<Dialog id={userMessageId}
            updateNewMessageText={props.updateNewMessageText}
            addNewMessage={props.addNewMessage}
            deleteMessage={props.deleteMessage}
        />
            :<ErrorTitle title={'Select dialogue'}/>
        }
    </DialogsStyled>
}






