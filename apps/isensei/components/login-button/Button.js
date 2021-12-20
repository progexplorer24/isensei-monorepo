import { signIn } from 'next-auth/react'
import Google from './google.svg'
import Facebook from './facebook.svg'
import GoogleDark from './google-dark.svg'
import Github from './github.svg'
import GithubDark from './github-dark.svg'
import { useDarkTheme } from '@/lib/hooks/useDarkTheme'
// interface StyleGuide {
//   Logo: any;
//   LogoDark?: any;
//   bg: string;
//   bgDark?: string;
//   text: string;
//   textDark?: string;
// }
const providerStyleGuides = {
  github: {
    Logo: Github,
    LogoDark: GithubDark,
    bg: 'bg-black',
    bgDark: 'bg-white',
    text: 'text-white',
    textDark: 'text-black',
  },
  google: {
    Logo: Google,
    LogoDark: GoogleDark,
    bgDark: 'bg-[#4285F4]',
    bg: 'bg-white',
    text: 'text-black',
    textDark: 'text-white',
  },
  facebook: {
    Logo: Facebook,
    LogoDark: Facebook,
    bgDark: 'bg-[#4267B2]',
    bg: 'bg-[#4267B2]',
    text: 'text-white',
    textDark: 'text-white',
  },
}

export default function LoginButton({ provider }) {
  const [isDark, mounted] = useDarkTheme()
  const { Logo, LogoDark, bg, bgDark, text, textDark } = providerStyleGuides[provider.id]
  if (!mounted) return null
  return (
    <div key={provider.name}>
      <button
        className={`w-56 h-12 flex items-center gap-3 text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-primary
         ${isDark && bgDark ? bgDark : bg}
         ${isDark && textDark ? textDark : text} `}
        onClick={() => signIn(provider.id)}
      >
        {isDark && LogoDark ? <LogoDark className="h-full p-2" /> : <Logo className="h-full p-2" />}
        Sign in with {provider.name}
      </button>
    </div>
  )
}
