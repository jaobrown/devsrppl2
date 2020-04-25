import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import MobileIllustration from "../images/mobile_illustration.svg"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="relative flex flex-wrap text-center">
      <img
        src={MobileIllustration}
        alt="Developers are people too illustration"
        className="w-full lg:-mt-20"
      />
      <div className="mt-8 w-full container px-8 sm:max-w-lg sm:mx-auto">
        <h1 className="font-mono font-bold tracking-widest uppercase text-brand-blue-lighter sm:text-lg">
          coming soon
        </h1>
        <img
          src={Logo}
          alt="Developers are people too logo"
          className="block mt-5 h-auto w-full mx-auto"
        />
        <p className="mt-6 text-sm sm:mt-8 font-mono text-brand-gray leading-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio.
        </p>
        <h2 className="mt-10 font-bold text-brand-blue text-2xl sm:text-3xl">
          Join the community
        </h2>
        <form name="sign up" action="POST" data-netlify="true">
          <label className="block w-full relative">
            <span className="block text-sm text-brand-gray  mt-1 font-mono">
              Recieve a notification when we launch
            </span>
            <input
              type="email"
              className="bg-white mt-6 mb-10 focus:outline-none focus:shadow-outline border-4 border-brand-teal rounded-sm h-12 px-4 block w-full appearance-none leading-normal font-mono text-sm"
              placeholder="john@example.com"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 h-12 bg-brand-teal rounded-tr-sm rounded-br-sm text-center px-4 text-brand-blue uppercase font-bold tracking-widest text-xs"
            >
              sign up
            </button>
          </label>
        </form>
      </div>
    </section>
  </Layout>
)

export default IndexPage
