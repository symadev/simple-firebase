import { GoogleAuthProvider } from "firebase/auth/web-extension";


const Login = () => {

    const provider = new GoogleAuthProvider()
    // এটি Firebase Authentication-এ Google Sign-In (গুগল লগইন) ব্যবহারের জন্য প্রয়োজন হয়।
    const handleGoogleSignIn = ()=>{
        console.log('google comming soon');
    }
    return (
        <div>
            <button onClick= {handleGoogleSignIn}>Login With Google</button>
        </div>
    );
};

export default Login;