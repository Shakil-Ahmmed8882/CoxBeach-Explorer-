import { BsGithub,BsGoogle } from 'react-icons/bs';
import useAuth from '../../🟢Utils/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
      const {googleSignIn} = useAuth()
      const navigate = useNavigate()
      const location = useLocation()
      const handleSignIn = media => {
            media()
            .then(()=> navigate(location.state? location.state: '/'))
            .catch(err => console.error(err))
      }

  return (

      <div className="space-y-3 mt-3 w-2/6">
        <p className="flex cursor-pointer items-center gap-3 border border-[#00000046] p-1 rounded-full">
          <BsGithub className="text-2xl text-[#000000] ml-2"></BsGithub>
          Continue with Facebook
        </p>
        <p onClick={()=> handleSignIn(googleSignIn)} className="flex cursor-pointer items-center gap-3 border p-1 rounded-full border-[#00000046] ">
          <BsGoogle  className="text-2xl ml-2 text-[#fd83b4]"></BsGoogle>
          Continue with Facebook
        </p>
      </div>

  );
};

export default SocialLogin;
