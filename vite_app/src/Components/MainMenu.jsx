import './Css/Main.css'
function Main() {

    return (
        <>
            <div className="navbar">
                <input type="text" placeholder="Search" className='search'></input>
                <div className="lens">
                    <div className="icon"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" /></div>
                    <div className="mic"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
                </div>
            </div>
        <div className="options">
            <div className="create"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" /></div>
            <div className="more"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" /></div>
            <div className="bell"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" /></div>
            <div className="account"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt="" /></div>
        </div>
        <div className="related">
          <button className='active'>All</button>
          <button>cook Studio</button>
          <button>UX</button>
          <button>Case Study</button>
          <button>Music</button>
          <button>Bangla Lofi</button>
          <button>Tour</button>
          <button>Saintmartin</button>
          <button>Tech</button>
          <button>IPhone 13</button>
        </div>
        </>

    )
}
export default Main