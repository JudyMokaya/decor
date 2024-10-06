import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg fixed-top'
      id='mainNav'
    >
      <div className='container px-4 px-lg-5'>
        <a
          className='navbar-brand'
          text-black
          href='#page-top'
        >
          <img
            src='assets/layout/images/logo.png'
            alt='Logo'
            className='navbar-logo'
          />
          PATRICK EVENTS & DECOR
        </a>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i className='fas fa-bars' />
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarResponsive'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#gallery'>
                Gallery
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#signup'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a className='btn btn-green' href='contact'>
                Get a Free Estimate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
