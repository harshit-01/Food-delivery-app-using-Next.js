import SignupPage from '../../components/SignupPage';
import {useRouter} from 'next/router';

export default function Signup({changeSignupStatus}){
    const router = useRouter();
    if (typeof window !== "undefined") {
        if(localStorage.getItem("loginStatus")){
            router.push('/');
        }
    }
    return(
        <SignupPage changeSignupStatus={changeSignupStatus}></SignupPage>
    )
}