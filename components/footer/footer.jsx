import React from 'react';

const  Footer = () => {
    return (
     <footer class="flex justify-center px-4 text-gray-100 bg-discord-300">
        <div class="container py-6">
            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" class="text-lg font-medium">© Copyright AceBot 2017-2020. All rights reserved.</a>
                </div>
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                      <a href="#" class="px-4 text-sm">Privacy Policy</a>
                      <a href="#" class="px-4 text-sm">Refund Policy</a>
                      <a href="#" class="px-4 text-sm">Terms of Service</a>
                      <a href="#" class="px-4 text-sm">Commands</a>
                  	</div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;