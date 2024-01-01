import { ProfileContactsType } from "../../model/profileReducer"
import { FC } from "react"
import { ContactsItem, ContactsList } from "./ProfileInfoStyled"
import { useAppSelector } from "../../../../app/store"
import { Icon } from "../../../../component/Icon"

type ProfileContactsPropsType = {}
export const ProfileContacts: FC<ProfileContactsPropsType> = () => {
  const contacts = useAppSelector((state) => state.profileReducer.profile?.contacts)

  if (typeof contacts !== "object" || contacts === null) {
    return <div>No contacts available</div>
  }
  console.log("Contacts", contacts)
  return (
    <ContactsList>
      {Object.entries(contacts).map(([key, value]) => (
        <ContactsItem key={key}>
          <a href={value ? value : ""}>
            <Icon iconId={`${key}`} />
          </a>
        </ContactsItem>
      ))}
    </ContactsList>
  )
}
