import {ProfileContactsType} from '../../../redux/reducers/profileReducer';
import {FC} from 'react';
import {ContactsItem, ContactsList} from './ProfileInfoStyled';
import {useAppSelector} from '../../../app/store';


type ProfileContactsPropsType = {
}
export const ProfileContacts: FC<ProfileContactsPropsType> = () => {
  const contacts = useAppSelector(state => state.profileReducer.profile?.contacts)

  if (typeof contacts !== 'object' || contacts === null) {
    return <div>No contacts available</div>;
  }

  return (
    <ContactsList>
      {Object.entries(contacts).map(([key, value]) => (
        <ContactsItem key={key}>
          <b>{key}:</b>
          {value ? (
            <a href={value}>{value}</a>
          ) : (
            <span> none</span>
          )}
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
