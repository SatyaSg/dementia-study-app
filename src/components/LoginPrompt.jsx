import { useAuth } from '../context/AuthContext'

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
)

export default function LoginPrompt({ total, sessionExpired }) {
  const { signInWithGoogle } = useAuth()
  const locked = total - 10

  async function handleSignIn() {
    try {
      await signInWithGoogle()
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        console.error(err)
      }
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${sessionExpired ? 'bg-red-50 border-2 border-red-200' : 'bg-amber-50 border-2 border-amber-200'}`}>
        {sessionExpired ? (
          <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )}
      </div>

      {sessionExpired ? (
        <>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Session timed out</h3>
          <p className="text-gray-500 text-sm mb-2">
            You were inactive for <span className="font-semibold text-gray-700">5 minutes</span>.
          </p>
          <p className="text-gray-400 text-xs mb-6">
            Please sign in again to continue where you left off.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Login to unlock all questions
          </h3>
          <p className="text-gray-500 text-sm mb-2">
            You've completed your <span className="font-semibold text-gray-700">10 free questions</span>.
          </p>
          <p className="text-gray-400 text-xs mb-6">
            Sign in to access the remaining <span className="font-semibold">{locked}</span> questions — it's free.
          </p>
        </>
      )}

      <button
        onClick={handleSignIn}
        className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:border-blue-400 hover:shadow-md transition-all mx-auto"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </div>
  )
}
