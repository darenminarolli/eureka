import Link from "next/link"

const Navbar = () => {
  return (
    <header className="z-50 px-4 lg:px-6 h-14 flex items-center bg-black ">
    <Link className="flex items-center justify-center" href="#">
      <EclipseIcon className="h-6 w-6 text-slate-50" />
      <span className="sr-only text-slate-50">Eureka</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm text-slate-50 font-medium hover:underline underline-offset-4"
        href="#">
        Home
      </Link>
      <Link
        className="text-sm text-slate-50 font-medium hover:underline underline-offset-4"
        href="#about">
        About
      </Link>
      <Link
        className="text-sm text-slate-50 font-medium hover:underline underline-offset-4"
        href="#work">
        Work
      </Link>
      <Link
        className="text-sm text-slate-50 font-medium hover:underline underline-offset-4"
        href="#contact">
        Contact
      </Link>
    </nav>
  </header>
  )
}

export default Navbar

function EclipseIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 1 0 10 10" />
      </svg>)
    );
  }