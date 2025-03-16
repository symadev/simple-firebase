// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";


const Login = () => {


    const [user,setUser] = useState([]);
    const provider = new GoogleAuthProvider()
    // এটি Firebase Authentication-এ Google Sign-In (গুগল লগইন) ব্যবহারের জন্য প্রয়োজন হয়।
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        //now its a callback like fetch
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
                setUser(null)
            });
    };


//     এই ফাংশন কেন দরকার?
// 1️⃣ Google Sign-In ব্যবহারের জন্য
// ➡️ Firebase-এর মাধ্যমে ইউজার যেন Google একাউন্ট দিয়ে সহজে লগইন করতে পারে।

// 2️⃣ Promise Handling (Asynchronous Code)
// ➡️ signInWithPopup() অ্যাসিনক্রোনাস মেথড, যা সার্ভারের সাথে যোগাযোগ করে। .then() দিয়ে সফল লগইন এবং .catch() দিয়ে ভুল হ্যান্ডল করা হয়।

// 3️⃣ Error Handling
// ➡️ লগইন ব্যর্থ হলে ইউজারকে সমস্যার কারণ জানানো যায়।

// 4️⃣ ইউজারের তথ্য ব্যবস্থাপনা
// ➡️ result অবজেক্ট থেকে ইউজারের ইমেইল, নাম, প্রোফাইল ছবি ইত্যাদি এক্সেস করা যায়।



const handleGoogleSignout = () => {
    signOut(auth)
    //now its a callback like fetch
        .then(() => {
            console.log('sign out done');
            setUser(null)
            //sign out is opposite
           
        })
        .catch((error) => {
            console.error( error);
           
        });
};
    


//if user exists ? signin:signout

return (
        <div>
            {/* <button onClick= {handleGoogleSignIn}>Login With Google</button>
            <br />
            <button onClick= {handleGoogleSignout}>Sign Out</button> */}


            {
                user ?
                <button onClick= {handleGoogleSignout}>Sign Out</button>:
                //user jdi thake taile signout
                 <button onClick= {handleGoogleSignIn}>Login</button>
              
            }



            {user && <div>
            <h4>{user.displayName}</h4>
            <p>{user.email}</p>
            <img src={user.photoURL}alt="" />
 
            </div>
            }
          


        </div>
    );
};

export default Login;