import React from 'react';
import {Profile} from './Profile';
import {ProfileType, setUserProfileAC} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {instance} from '../../api/api-utils';
import {withRouter} from '../../utils/withRouter';
import {NavigateFunction, Params} from 'react-router';


type PropsType = {}

class ProfileContainer extends React.Component<ProfilePropsType, PropsType> {
    componentDidMount() {
        let userId: number | undefined = this.props.router.params.userId ? +this.props.router.params.userId : undefined;
        if(!userId){
            userId = 24203;
        }
        instance.get(`profile/${userId}`)
            .then(response => {
                console.log('ProfileInfo', response.data)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>
(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    router: {
        location: Location
        navigate:  NavigateFunction
        params: Readonly<Params<string>>
    }
}