import { IconBrandGoogle } from "@tabler/icons-react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase";

function SignIn() {
  const handleUserGoogleLogin = async () => {
    const responnse = await signInWithGooglePopup()
    console.log(responnse)
    const userDoc = await createUserDocumentFromAuth(responnse.user)
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-3">
      <div className="bg-white shadow-[0px_0px_145px_-16px_rgba(0,0,0,0.11),0px_0px_18px_-16px_rgba(0,0,0,0.073)] max-w-xl w-full py-3 px-8">
        <h1 className="text-center font-bold text-2xl">Sign In</h1>
        <div className="mt-8">
          <button className="my-3 py-2 px-6 w-full border border-slate-400-300 flex justify-start items-center"
            onClick=
            {
              handleUserGoogleLogin
            }
          >
            <IconBrandGoogle />
            <span className="flex-1">Sign With Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;