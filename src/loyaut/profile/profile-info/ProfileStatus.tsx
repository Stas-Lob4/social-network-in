import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    setStatus: (status: string) => void
}
export const ProfileStatus: React.FC<PropsType> = ({status, setStatus}) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => setEditMode(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ? <span onDoubleClick={activateEditMode}>{status}</span>
                       : <input onChange={onChangeHandler} autoFocus={true} onBlur={deactivateEditMode} value={status}/>}
        </div>
    );
};
