import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    setStatus: (status: string) => void
}
export const ProfileStatus: React.FC<PropsType> = ({status, setStatus}) => {

    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => setEditMode(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ? <span onDoubleClick={activateEditMode}>{status || 'no status'}</span>
                       : <input onChange={onChangeHandler} autoFocus={true} onBlur={deactivateEditMode} value={status}/>}
        </div>
    );
};
