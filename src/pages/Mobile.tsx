import React from 'react'

export default function Mobile() {
    return (
        <div>
            {/* SmartNews */}
            <div className='flex justify-between w-full h-[700px] bg-amber-500'>
                <div className='left w-1/2'>

                    <div className='font-mono text-5xl text-blue-100 ml-20 pt-5'>SmartNews</div>
                    <div className=' text-slate-100 text-xl mt-3 w-4/5 mx-auto'>SmartNews is the award-winning news app downloaded by 50+ million readers in 150+ countries!
                        SmartNews analyzes millions of articles every day to deliver the top trending news stories influencing the world right now.</div>

                    <div className='font-bold ml-8 text-slate-200 text-xl mt-8  mx-auto'>
                        - Developed the Smartnews US edition local and experience features, including disaster map and Youtube video integration inside the feeds, helping to improve the users` engagement, activation, and retention metrics.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Developed utilities to improve the developer experience and efficiency, including feature flags editor, shared preference editor, unit test coverage report automation, and feed item preview feature.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Built the server-driven dynamic UI prototype to update the UI without app release using flex layout and DSL.
                    </div>
                </div>
                <div className='right mr-20 w-auto my-auto'>
                    <img className='h-[550px] ' src="images/smartnews.png" alt="" />
                </div>
            </div>
            {/* Weibo */}
            <div className='flex justify-between w-full h-[700px] bg-indigo-300'>
                <div className='left mx-4 w-auto my-auto flex sp'>
                    <img className='h-[550px] -rotate-3' src="images/weibo_1.png" alt="" />
                    <img className='h-[550px] z-1 absolute ml-24 rotate-3' src="images/weibo_2.png" alt="" />
                </div>
                <div className='right  w-3/5'>
                    <div className='font-mono text-5xl text-blue-100 ml-20 pt-5'>Weibo Live</div>
                    <div className=' text-slate-100 text-xl mt-3 w-4/5 mx-auto'>
                        Weibo live is the platform where hundreds of millions of people interact.
                    </div>

                    <div className='font-bold ml-8 text-slate-200 text-xl mt-4  mx-auto'>
                        - Achieved a 300% increase in module DAU by leading the team to develop the Live module of the Weibo app, managing features development and efficient utility development.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Completed performance monitoring and optimization of the live room, including open speeds, fps, and memory leaks.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Increased the page open speed by implementing the Gradle plugin to track the live room performance at the method level, then extract a library to benefit the other teams.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Completed the digitization of the live room, including data collection, reporting, monitoring, and statistics, which helped the product teams to measure the users` metrics.                    </div>
                </div>
            </div>
            {/* Sougou */}
            <div className='flex justify-between w-full h-[700px] bg-blue-500'>
                <div className='left w-1/2'>
                    <div className='font-mono text-5xl text-blue-100 ml-20 pt-12'>Sogou</div>
                    <div className=' text-slate-100 text-xl mt-3 w-4/5 mx-auto'>
                        Sogou is a challenger in China's search industry and an innovator in the field of AI. Its business covers search, input method, games, finance, voice, intelligent hardware, etc
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-8  mx-auto'>
                        - Developed a game store app using MVVM, OkHttp, RxJava, and Retrofit to display thousand of game apps and provide game installation and management functions.                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Developed an Android SDK for the game maker to connect the Sogou account and profit system.                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Developed a Gradle plugin to pack the SDK automatically.
                    </div>
                </div>
                <div className='right mr-20 w-auto my-auto '>
                    <img className='h-[550px] rounded-2xl' src="images/paydayloan.png" alt="" />
                </div>
            </div>
            {/* WPS */}
            <div className='flex justify-between w-full h-[700px] bg-indigo-300'>
                <div className='left ml-10 w-auto my-auto flex sp'>
                    <img className='h-[550px]' src="images/wps_mail.jpeg" alt="" />
                </div>
                <div className='right  w-3/5'>
                    <div className='font-mono text-5xl text-blue-100 ml-20 pt-12'>WPS Mail</div>
                    <div className=' text-slate-100 text-xl mt-3 w-4/5 mx-auto'>
                        WPS Mail is another variant of Mi Mail embeded in MIUI, which is a mail app with 100 million users. WPS Mail is easy to use and has a clean UI. it supports multiple accounts, multiple themes, and different cloud storage.
                    </div>

                    <div className='font-bold ml-8 text-slate-200 text-xl mt-4  mx-auto'>
                        - Developed mail contacts management, attachment management, and multiple themes support.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Connected Dropbox to save attachments for WPS Mail international edition.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Developed the UI of multiple pages and modules.
                    </div>
                    <div className='font-bold ml-8 text-slate-200 text-xl mt-3  mx-auto'>
                        - Increased the attachment decoding speed by 24 times by optimizing Base64 data reading flow.
                    </div>
                </div>
            </div>
        </div>
    )
}
