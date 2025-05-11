import React, {useState} from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import AuthInput from '../../components/input/AuthInput';
import { useNavigate } from 'react-router-dom';
import ProfilePhotoSelecter from '../../components/input/ProfilePhotoSelecter';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const SignUpForm = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] =useState("");
  const[password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  //handle Sign Up Form Submission
  const handleSignUp = async (e) => {
    e.preventDefault();

        if (!fullName) {
          setError('Please enter the full name');
          return;
        }
        if (!validateEmail(email)) {
          setError('Please enter a valid email address');
          return;
        }
        if (!username) {
          setError('Please enter username');
          return;
        }
        if (!password) {
          setError('Please enter a password');
          return;
        }
        setError('');
    
        // Sign up API 
        try{
    
        } catch (err) {
    
        }
  }
  return (
   <AuthLayout>
    <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelecter image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

          <AuthInput
          value={fullName}
          onChange={({target}) => setFullName(target.value)}
          label='Full Name'
          type='text'
          placeholder='John'
          />
         
          <AuthInput
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          type="email"
          placeholder="john@gmail.com"
          />

          <AuthInput
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          label="Username"
          type="text"
          placeholder="@"
          />

          <AuthInput
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          type="password"
          placeholder="Minimum 8 characters"
            />
        </div>

{error && <p className="text-red-500 text-xs pd-2.5">{error}</p>}

          <button
            type="submit"
            className="btn-primary hover:bg-blue-700 hover:text-white transition-all"
          >
            Create Account
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{' '}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>


      </form>
    </div>
   </AuthLayout>
  )
}

export default SignUpForm