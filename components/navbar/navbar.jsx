import React, { useState } from 'react'
import Link from 'next/link'


const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
  <nav className="flex items-center justify-between flex-wrap bg-discord-300 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/"><h1 className="text-lg font-medium leading-none">AceBot</h1></a>
          </div>
          <div className="block lg:hidden">
              <button
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              onClick={() => toggleExpansion(!isExpanded)}
              >
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                  </div>
                  <div className={`${
                      isExpanded ? `block` : `hidden`
                      } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                          <div className="text-md lg:flex-grow">
                              <a href="/commands" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                  <span className="mr-2"><i className="fas fa-terminal"></i></span>
                                  Commands
                                  </a>
                                  <a href="/support" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                      <span className="mr-2"><i className="fas fa-home"></i></span>
                                      Support
                                      </a>
                                      <a href="/invite" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                        <span className="mr-2"><i className="fas fa-plus"></i></span>
                                        Invite
                                    </a>
                                </div>
                             <div>
                          <a href="/api/auth/discord" className="inline-block text-sm px-4 py-2 leading-none bg-discord-200 rounded text-white mt-4 lg:mt-0"><span className="m-2"><i className="fab fa-discord"></i></span>Login with Discord</a>
                    </div>
            </div>
    </nav>
  )
}

export default Navigation
