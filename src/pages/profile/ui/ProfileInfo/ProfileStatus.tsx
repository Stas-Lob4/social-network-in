import React, { ChangeEvent, useEffect, useState } from "react"
import { useAppSelector } from "../../../../app/store"

type PropsType = {
  setStatus: (status: string) => void
  isUsersStatus: boolean
}
export const ProfileStatus: React.FC<PropsType> = ({ setStatus, isUsersStatus }) => {
  const status = useAppSelector((state) => state.profileReducer.status)
  const [text, setText] = useState(status)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setText(status)
  }, [status])
  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => setEditMode(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const setStatusHandler = () => {
    setStatus(text)
    deactivateEditMode()
  }

  if (isUsersStatus) {
    return (
      <div>
        {!editMode ? (
          <span onDoubleClick={activateEditMode}>{text ? text : "no status"}</span>
        ) : (
          <input onChange={onChangeHandler} autoFocus={true} onBlur={setStatusHandler} value={text} />
        )}
      </div>
    )
  }
  return (
    <div>
      <span onDoubleClick={activateEditMode}>{text ? text : "no status"}</span>
    </div>
  )
}
