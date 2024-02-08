import React from 'react';

const Posts = () => {
    return (
        // https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
        <div className=' bg-cover text-white py-36 pb-60' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
            <div className='max-w-screen-xl mx-auto'>
            <h1 className='uppercase text-4xl font-mono mb-8'>Hikaru's recent posts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div >
                <h2 className='text-2xl text-rose-500'>2022 FIDE GRAND PRIX KHANTY-MANSIYSK</h2>
                <p>A new blog chronicling my recent event in Khanty-Mansiysk, Russia. http://www.chess.com/blog/Hikaru/fide-grand-prix-khanty-mansiysk</p>
            </div>
            <div>
            <h2 className='text-2xl text-rose-500'>2022 US CHESS CHAMPIONSHIP</h2>
                <p>As most of you know, I have started a collaboration with chess.com, so here is the link to the actual blog post. http://www.chess.com/blog/Hikaru/us-champs</p>
            </div>
            <div>
            <h2 className='text-2xl text-rose-500'>52TH BIEL CHESS FESTIVAL PART I</h2>
                <p>It seems like it has been an absolute eternity since I last blogged. This has mainly been due to the fact that tweeting is a lot easier since it is far more senseless and a mere 140 characters! At the same time, I have also been enjoying life a lot in between tournaments spending most…</p>
            </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default Posts;