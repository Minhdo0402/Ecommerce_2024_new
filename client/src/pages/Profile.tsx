import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { store } from "../lib/store";
import Container from "../ui/Container";
import Registration from "../ui/Registration";
import UserInfo from "../ui/UserInfo";
import Loading from "../ui/Loading";

const Profile = () => {
    const { currentUser, getUserInfo, isLoading } = store();

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                getUserInfo(user.uid);
            } else {
                // Handle the case when user is null or undefined
                getUserInfo('');
            }
        });

        return () => {
            unSub();
        };
    }, [getUserInfo]);

    return (
        <Container>
            {currentUser ? <UserInfo currentUser={currentUser} /> : <Registration />}
            {isLoading && <Loading />}
        </Container>
    );
};

export default Profile;
