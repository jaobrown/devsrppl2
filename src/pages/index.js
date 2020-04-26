import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import MobileIllustration from "../images/mobile_illustration.svg"
import DesktopIllustration from "../images/desktop_illustration.svg"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
        <p className="mt-6 text-sm sm:mt-8 font-mono text-brand-gray leading-5 lg:mt-10 xl:mt-4 lg:text-xl lg:leading-8 xl:text-base xl:leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <h2 className="mt-10 font-bold text-brand-blue text-2xl sm:text-3xl lg:text-4xl lg:mt-16 xl:mt-10 xl:text-xl">
          Join the community
        </h2>
        <form
          name="sign up"
          action="POST"
          data-netlify="true"
          className="lg:max-w-lg lg:mx-auto xl:mx-0 xl:max-w-sm"
        >
          <label className="block w-full relative">
            <span className="block text-sm text-brand-gray  mt-1 font-mono lg:text-lg xl:text-base">
              Recieve a notification when we launch
            </span>
            <input
              type="email"
              className="block bg-white mt-6 mb-10 xl:mb-0 focus:outline-none focus:shadow-outline border-4 border-brand-teal rounded-sm h-12 px-4 block w-full appearance-none leading-normal font-mono text-sm"
              placeholder="john@example.com"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 h-12 bg-brand-teal rounded-tr-sm rounded-br-sm text-center px-4 text-brand-blue uppercase font-bold tracking-widest text-xs xl:px-8"
            >
              sign up
            </button>
          </label>
        </form>
      </div>
      <img
        src={DesktopIllustration}
        alt="Developers are people too illustration"
        className="hidden xl:block w-1/2 absolute top-0 right-0"
      />
    </section>
  </Layout>
)

export default IndexPage
