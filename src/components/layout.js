import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen xl:h-screen xl: overflow-y-hidden antialiased bg-brand-brand-white">
      <main>{children}</main>
      <footer className="absolute bottom-0 inset-x-0 bg-brand-blue-darker h-12"></footer>
    </div>
  )
}

export default Layout
