import LoginPage from '../../components/LoginPage.jsx';
import {useRouter} from 'next/router';

export default function Login({changeLoginStatus}){
    const router = useRouter();
    if (typeof window !== "undefined") {
        if(localStorage.getItem("loginStatus")){
            router.push('/');
        }
    }
    return(
        <>
            <LoginPage changeLoginStatus={changeLoginStatus}></LoginPage>
        </>
    )
}