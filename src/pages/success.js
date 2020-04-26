import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import MobileIllustration from "../images/mobile_illustration.svg"
import DesktopIllustration from "../images/desktop_illustration.svg"
import Logo from "../images/logo.svg"

const SuccessPage = () => (
  <Layout>
    <SEO title="Thanks, pal" />
    <section className="relative flex flex-wrap text-center xl:text-left pb-12 xl:pb-0 xl:pl-32 xl:items-center xl:h-screen">
      <img
        src={MobileIllustration}
        alt="Developers are people too illustration"
        className="w-full lg:-mt-20 xl:hidden"
      />
      <div className="mt-8 lg:mt-16 xl:mt-0 w-full container px-8 sm:max-w-lg sm:mx-auto lg:max-w-2xl xl:max-w-xl xl:mx-0">
        <h1 className="font-mono font-bold tracking-widest uppercase text-brand-blue-lighter sm:text-lg lg:text-3xl xl:text-base">
          coming soon
        </h1>
        <img
          src={Logo}
          alt="Developers are people too logo"
          className="block mt-5 h-auto w-full mx-auto xl:mx-0 xl:max-w-sm"
        />
        <p className="block text-sm text-brand-gray  mt-6 font-mono lg:text-lg xl:text-base">
          Sick! Thanks for signing up. You'll be in the know.
        </p>
      </div>
      <img
        src={DesktopIllustration}
        alt="Developers are people too illustration"
        className="hidden xl:block w-1/2 absolute top-0 right-0"
      />
    </section>
  </Layout>
)

export default SuccessPage
