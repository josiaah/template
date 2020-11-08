import Head from 'next/head'
import Layout from '../components/layout/layout'

export default function Home() {
return (
<Layout>
   <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
         <h1 className="text-white font-bold text-6xl my-4">AceBot</h1>
         <p className="leading-normal mb-4 text-white font-semibold">Level Up! Power Up! And most importantly secure your discord server, and interact with your community. Reaction Roles, Auto Roles, Moderation, Leveling and many more! Invite AceBot to your Discord server today, and have fun.</p>
         <button className="bg-red-500 text-white border-4 border-gray-900 rounded-full shadow hover:shadow-lg py-2 px-6">Invite to Discord!</button>
      </div>
      <div className="w-full lg:w-1/2 text-center">
         <img src="/img/logo.png" className="rounded-full border-2 border-gray-900"/>
      </div>
   </div>
   <div className="flex flex-wrap items-center justify-center">
      <section className="py-8">
         <div className="container max-w-5xl mx-auto m-8">
            <div className="w-full mb-4">
               <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
               <div className="w-3/5 sm:w-1/2 p-6">
                  <h3 className="text-3xl text-white font-bold leading-none mb-3">Setup Reaction Roles</h3>
                  <p className="text-gray-100 mb-8">Configure Reaction Roles to help interact with your community! Acebot's reaction role system is simple and easy to use.</p>
               </div>
               <div className="w-full sm:w-1/2 p-6">
                  <img src="/img/reaction.png" className="w-full rounded-md border border-gray-900 mx-auto"/>
               </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
               <div className="w-full sm:w-1/2 p-6 mt-6">
                  <img src="/img/info.png" className="w-full rounded-md border border-gray-900 mx-auto"/>
               </div>
               <div className="w-full sm:w-1/2 p-6 mt-6">
                  <div className="align-middle">
                     <h3 className="text-3xl text-white font-bold leading-none mb-3">Find Information on Users</h3>
                     <p className="text-gray-100 mb-8">Find Information on Users in your community, secure and prevent raids! All integrated within Acebot's core system, stop reading, start inviting.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</Layout>
)
}