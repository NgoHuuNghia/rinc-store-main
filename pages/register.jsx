import {FaFacebookSquare, FaGoogle} from 'react-icons/fa'
// import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from 'react'
import { query, doc, setDoc, orderBy, limit, collection, serverTimestamp } from 'firebase/firestore';
import {FaFilter, FaSearch, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import kebabCase from 'lodash.kebabcase'
import toast from 'react-hot-toast'

import AdminGamesList from '@components/admin/AdminGamesList'
import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { useSidebar } from '@lib/adminContext'
import { signInWithPopup, signOut } from 'firebase/auth';
// import style from '@styles/css/Hai/style.module.css'
// import '@styles/css/Hai/util.css'

const register = () => {
	return (
		<div className="limiter">
			<div className="container-login100" style={{backgroundImage: "url('/bg-01.jpg')"}}>
				<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
					<form className="login100-form validate-form flex-sb flex-w">
						<span className="login100-form-title p-b-53">
							Sign In With
						</span>

						<a href="#" className="btn-face m-b-20">
							<FaFacebookSquare />
							Facebook
						</a>

						{/* <a href="#" className="btn-google m-b-20">
							<FaGoogle />
							Google
						</a> */}
						<SignInButton />
						<SignOutButton />
						
						<div className="p-t-31 p-b-9">
							<span className="txt1">
								Username
							</span>
						</div>
						<div className="wrap-input100 validate-input" data-validate = "Username is required">
							<input className="input100" type="text" name="username" />
							<span className="focus-input100"></span>
						</div>
						
						<div className="p-t-31 p-b-9">
							<span className="txt1">
								Email
							</span>
						</div>
						<div className="wrap-input100 validate-input" data-validate = "Email is required">
							<input className="input100" type="email" name="mail" />
							<span className="focus-input100"></span>
						</div>

						<div className="p-t-13 p-b-9">
							<span className="txt1">
								Password
							</span>
						</div>
						<div className="wrap-input100 validate-input" data-validate = "Password is required">
							<input className="input100" type="password" name="pass" />
							<span className="focus-input100"></span>
						</div>

						<div className="container-login100-form-btn m-t-17">
							<button className="login100-form-btn">
								Register
							</button>
						</div>

						<div className="w-full text-center p-t-55">
							<span className="txt2">
								Already have an account?
							</span>

							<a href="login.html" className="txt2 bo1">
								Sign In now
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function SignInButton() {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider)
        } catch (error) {
            console.error("ERROR CANT SIGNIN" + error);
            alert(error.message);
        }
    }

    return (
        <div>
            <button className="btn-google" onClick={signInWithGoogle}>
                <img src={'/google.png'} width="30px" /> Sign in with Google
            </button>
            {/* <button onClick={() => signInAnonymously(auth)}>
                Sign in Anonymously
            </button> */}
        </div>
    )
}

function SignOutButton() {
    return <div><button onClick={() => signOut(auth)}>Sign Out</button></div>
}



export default register;