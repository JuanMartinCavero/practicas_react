import './App.css'
import { TwitterFollowCard } from './TwitterFollowCards'

/*
export function App(){
    return(
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar' 
            src="https://unavatar.io/midudev" alt="El avatar de midudev" />
            <div className='tw-followCard-info'>
                <strong>Miguel Angel Duran</strong>
                <span className='tw-followCard-infoUserName'>@midudev</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
       </article>
    )

}*/
 export function App(){
    return(
        <section className="App">
            <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel Angel Duran" />
             <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
              <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
                 <TwitterFollowCard isFollowing userName="vxnder" name="Elon Musk" />
        </section>
    )
 }