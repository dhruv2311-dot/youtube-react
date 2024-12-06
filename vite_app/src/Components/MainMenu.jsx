import './Css/Main.css'
function Main() {

    const videolist = [
        { id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 2, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'ATC Andriod TOTO Company', feature: '1.5M views - 2 days ago' },
        { id: 3, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Saptarshi Prakash', feature: '1.5M views - 2 days ago' },
        { id: 4, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Lopamundra Mitra,Anupam Roy', feature: '1.5M views - 2 days ago' },
        { id: 5, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'AJ&Smar', feature: '1.5M views - 2 days ago' },
        { id: 6, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 7, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 8, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 9, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 10, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 11, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
        { id: 12, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    ];
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
                <button>User Interface Design</button>
            </div>
            <div className="main2">
                {videolist.map((b) => (
                    <div key={b.id} className="thumbnail1">
                        <img src={b.img_t} alt="" height={145} />
                        <div className="information">
                            <img src={b.img_c} alt="" />
                            <div className="videodetail">{b.detail}</div>
                        </div>
                        <div className="channelname">{b.channelname}</div>
                        <div className="views">{b.feature}</div>
                    </div>
                ))}
            </div>

        </>

    )
}
export default Main