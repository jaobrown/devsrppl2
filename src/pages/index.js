import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import MobileIllustration from "../images/mobile_illustration.svg"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="relative flex flex-wrap">
      <img
        src={MobileIllustration}
        alt="Developers are people too illustration"
        className="w-full"
      />
      <div className="mt-8 w-full container px-4">
        <h1 className="font-mono font-bold tracking-widest uppercase text-brand-blue-lighter text-center">
          coming soon
        </h1>
        <img
          src={Logo}
          alt="Developers are people too logo"
          className="block mt-5 h-auto w-full mx-auto"
        />
        <p className="mt-6 text-xs font-mono text-brand-gray leading-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio.
        </p>
        <h2 className="mt-10 font-bold text-brand-blue text-2xl text-center">
          Join the community
        </h2>
        <form action="POST" netlify="true">
          <label className="block w-full relative">
            <span className="block text-xs text-brand-gray text-center mt-1 font-mono">
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
    <span
      className="absolute inset-x-0 h-8 bg-brand-blue-darker"
      role="presentation"
    ></span>
  </Layout>
)

export default IndexPage
