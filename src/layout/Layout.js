// components/layout/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
    script.async = true
    script.onload = () => {
      const isotopeScript = document.createElement('script')
      isotopeScript.src =
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js'
      isotopeScript.async = true
      isotopeScript.onload = () => {
        // Initialize Isotope after the script is loaded
        const $ = window.jQuery
        const $grid = $('.portfolio-item').isotope({
          itemSelector: '.item',
          layoutMode: 'fitRows',
        })

        $('.portfolio-menu ul li').click(function () {
          $('.portfolio-menu ul li').removeClass('active')
          $(this).addClass('active')

          const selector = $(this).attr('data-filter')
          $grid.isotope({ filter: selector })
          return false
        })
      }
      document.body.appendChild(isotopeScript)
    }
    document.body.appendChild(script)
  }, [])
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content='' />
        <meta name='author' content='' />
        <title>PATRICK EVENTS & DECOR</title>
        <link
          rel='icon'
          type='image/x-icon'
          href='assets/images/logo.png'
        />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link
          href='https://fonts.googleapis.com/css?family=Varela+Round'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
          rel='stylesheet'
        />
        {/*<!-- Add this in the head section -->*/}
        <script
          async
          src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
        ></script>
        <script
          async
          src='https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js'
        ></script>
        <script
          defer
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
          crossorigin='anonymous'
        ></script>

        {/* Core theme CSS (includes Bootstrap)*/}
        <link href='css/styles.css' rel='stylesheet' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
