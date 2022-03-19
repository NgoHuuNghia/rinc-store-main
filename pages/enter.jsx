import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {BiFace} from 'react-icons/bi'
import { useContext } from 'react'
import { UserContext } from '@lib/globalContext'

const enter = () => {
    const {user, username} = useContext(UserContext)

    return (
        <section className="enter-container">
            <div>
                <div className="user-form">
                    <h2>
                        {user 
                            ? username ? 'You already got a username' : 'Choose a username'
                            : 'Sign up'
                        }
                    </h2>
                    <form>
                        {!user && <input type="text" placeholder="Email"/>}
                        {!username && <input type="text" placeholder="Username"/>}
                        {!user && <input type="password" placeholder="Password" disabled={true}/>}
                        {!user && !user && <button>Sign up</button>}
                        {!username || user && <button>Choose username</button>}
                    </form>
                    <a>Have an account already? Log in</a>
                </div>
                <div className="social-sign-up">
                    <p>Sign up with socials</p>
                    <button><span>Sign in with Google</span> <FcGoogle/></button>
                    <button><span>Sign in with Facebook</span> <FaFacebook/></button>
                    <button><span>Sign in Anonymously</span> <BiFace/></button>
                </div>
            </div>
        </section>
    );
}

export default enter;