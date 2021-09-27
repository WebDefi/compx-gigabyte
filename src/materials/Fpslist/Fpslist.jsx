import "./Fpslist.scss";
import {Fragment, useEffect, useState} from "react";
import groupService from "../../service/groupService";

const Fpslist = () => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedResolution, setSelectedResolution] = useState('1080');

    useEffect(() => {
        groupService.receiveGames().then(json => {
            setSelectedGame(json.data.games[0]);
            setGames(json.data.games);
        });
    }, []);

    const onGameSelect = (game) => {
        setSelectedGame(game);
    };

    const onResolutionSelect = (resolution) => {
        setSelectedResolution(resolution);
    };

    return games.length > 0 ? (
        <Fragment>
            <div data-v-b44cebd0="" className="row">
                <div data-v-b44cebd0="" className="col-12 text-center">
                    <div data-v-b44cebd0="" className="template-title">
                        <h2 data-v-b44cebd0=""
                            className="fontAldrich">FIND THE RIGHT
                            GRAPHICS CARD FOR YOUR GAME
                        </h2>
                    </div>
                    <div data-v-b44cebd0="" className="template-content">
                        <h2 data-v-b44cebd0="">Select a game,
                            and we'll help you find Graphics Cards that meet its requirements.
                        </h2>
                    </div>
                </div>
                <div data-v-b44cebd0="" className="col-12 find-product-div mt-5">
                    <div data-v-3d1a4f76="" data-v-b44cebd0="" className="slick-slider slick-initialized">
                        <div data-v-3d1a4f76="" className="slick-list">
                            <div data-v-e4caeaf8="" data-v-3d1a4f76="" className="slick-track slick-center">
                                {games.map(game => {
                                    return <div data-v-e4caeaf8="" tabIndex="-1" data-index="0" aria-hidden="false"
                                                className="slick-slide slick-center" onClick={() => onGameSelect(game)}>
                                        <div data-v-e4caeaf8="">
                                            <div data-v-b44cebd0="" data-v-e4caeaf8="" tabIndex="-1" className="slide">
                                                <div data-v-b44cebd0="" data-v-e4caeaf8=""
                                                     className={`content-div ${selectedGame.videoGameName === game.videoGameName ? 'active': ''}`}>
                                                    <div data-v-b44cebd0="" data-v-e4caeaf8="" className="box"><img
                                                        data-v-b44cebd0="" data-v-e4caeaf8="" alt=""
                                                        data-src="/assets/img/Cyberpunk_2077.71d10fd3.jpg"
                                                        src={game.videoGameImgUrl} lazy="loaded"
                                                        width="125" height="214"/></div>
                                                </div>
                                                <div data-v-b44cebd0="" data-v-e4caeaf8=""
                                                     className="title active">
                                                    {game.videoGameName}
                                                </div>
                                            </div>
                                        </div>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-b44cebd0="" className="col-12 product-list-div">
                    <div data-v-b44cebd0="" className="content-list-box">
                        <div data-v-b44cebd0="" className="row">
                            <div data-v-b44cebd0="" className="col-12">
                                <div data-v-b44cebd0="" className="tab-div">
                                    <div data-v-b44cebd0="" onClick={() => onResolutionSelect('1080')}
                                         className={`tabBtn ${selectedResolution === '1080' ? 'active' : ''}`}>
                                        <img data-v-b44cebd0=""
                                             src="https://www.aorus.com/assets/img/icon-1080p-full-hd.0a444cf2.svg"
                                             alt="" srcSet="" height="150"
                                             width="64"/><span
                                        data-v-b44cebd0=""> 1080P </span></div>
                                    <div data-v-b44cebd0="" onClick={() => onResolutionSelect('2k')}
                                         className={`tabBtn ${selectedResolution === '2k' ? 'active' : ''}`}>
                                        <img data-v-b44cebd0=""
                                             src="https://www.aorus.com/assets/img/icon-quad-hd-2k.3b80e183.svg"
                                             alt="" srcSet="" height="150"
                                             width="64"/><span
                                        data-v-b44cebd0=""> 2K </span></div>
                                    <div data-v-b44cebd0="" onClick={() => onResolutionSelect('4k')}
                                         className={`tabBtn ${selectedResolution === '4k' ? 'active' : ''}`}>
                                        <img data-v-b44cebd0=""
                                             src="https://www.aorus.com/assets/img/icon-ultra-hd-4k.b9569be1.svg"
                                             alt="" srcSet="" height="150"
                                             width="64"/><span
                                        data-v-b44cebd0=""> 4K </span></div>
                                    <div data-v-b44cebd0="" className="selectDiv">
                                        <div data-v-b44cebd0=""> 1080P </div>
                                        <div data-v-b44cebd0="" className="selectBox">
                                            <div data-v-b44cebd0="" className="select active"> 1080P </div>
                                            <div data-v-b44cebd0="" className="select"> 2K </div>
                                            <div data-v-b44cebd0="" className="select"> 4K </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-b44cebd0="" className="row gamelistdiv">
                            <div data-v-b44cebd0="" className="col-12">
                                <div data-v-b44cebd0="" className="row">
                                    {selectedGame.relatedItems[selectedResolution].map(item => {
                                        return (
                                            <div data-v-b44cebd0="" className="col-product">
                                                <a data-v-b44cebd0="">
                                                    <img
                                                        data-v-b44cebd0="" alt=""
                                                        src={item.videoCardPictureUrl}
                                                        lazy="loaded" height="326" width="177"/>
                                                    <div data-v-b44cebd0="" className="title">
                                                        {item.videoCardName}
                                                    </div>
                                                    <div data-v-b44cebd0="" className="subTitle"></div>
                                                </a>
                                                <div data-v-b44cebd0="" className="dataList text-left">
                                                    <div data-v-b44cebd0=""><span data-v-b44cebd0=""></span><span
                                                        data-v-b44cebd0="" className="text-aorus">AVG FPS</span>
                                                    </div>
                                                    {Object.keys(item.fpsAttrs).map(attr => {
                                                        return (
                                                            <div data-v-b44cebd0="">
                                                                <span data-v-b44cebd0="">{attr}</span>
                                                                <span data-v-b44cebd0="" className="text-warning">
                                                                    {item.fpsAttrs[attr]}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) : <Fragment/>;
};

export default Fpslist;
