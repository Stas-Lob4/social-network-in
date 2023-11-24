import React from 'react';
import {UsersPropsType} from '../UsersContainer';
import user_icon from '../../../assets/img/user-icon.jpg'
import styles from './Users.module.css'
import ReactPaginate from 'react-paginate';
import {HashLoader} from 'react-spinners';
import {NavLink} from 'react-router-dom';

type PropsType = {
    onPageChanged: (pageNumber: number) => void
}
export const Users: React.FC<UsersPropsType & PropsType> = (props) => {
    return (
        <div className={styles.container}>
            {props.users.length === 0
                ? <div className={styles.preloader_box}>
                    <HashLoader
                        color={'red'}
                        size={250}
                    />
                </div>
                : <div>
                    <ReactPaginate
                        pageCount={props.totalCount / props.pageSize}
                        className={styles.pagination}
                        onPageChange={(selectedItem: {
                            selected: number
                        }) => props.onPageChanged(selectedItem.selected)}
                    />
                    <div className={styles.users_container}>
                        {props.users.map(u =>
                            <div key={u.id} className={styles.user_box}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img alt={'img user'} src={u.photos.large != null ? u.photos.large : user_icon}/>
                                </NavLink>
                                <h3>{u.name.length <= 13 ? u.name : u.name.substring(0, 12) + '...'}</h3>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}
                                              className={styles.unfollow_button}
                                    >Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}
                                              className={styles.follow_button}
                                    >Follow</button>
                                }
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )

}
