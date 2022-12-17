import React from 'react';
import './modal.css';
import playlists from "../../../../redux/allplaylists";
import SelectSongs from './SelectSongs/SelectSongs';
import allsongs from "../../../../redux/allsongs";
import state from '../../../../redux/state';

const Modal = ({ isVisible = false, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                state.length=1;
                onClose();
                break;
            default:
                
        }
    };

    let newPlaylistElement = React.createRef();

    let createPlaylist = () => {
        
        let mysongs=[];
        for(let i=0;i<state.length;i++){
            if(!isNaN(state[i])){
                mysongs.push(state[i]);
            }
        }
        let temp ={
        id: playlists.length+1,
        name:(newPlaylistElement.current.value).trim(),
        picture:allsongs.find(e=>e.id==mysongs[0]).url,
        songs:mysongs,
    };   console.log(allsongs.find(e=>e.id==mysongs[0]));
        if(temp.name==""||mysongs.length<1||playlists.find(e=>e.name===temp.name)){onClose();state.length=1;return;}
        playlists.push(temp);
        console.log(temp+"\n"+state+"\n"+mysongs);
        onClose();
        state.length=1;
        
      };


    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });
    let AllSongs=allsongs.map(e=><SelectSongs name={e.name} id={e.id}/>);
    


    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                    <input className="listName" type="text" ref={newPlaylistElement} placeholder='Playlist Name' />
                    </div>
                    {AllSongs}
                </div>
                {footer && <div className="modal-footer" onClick={createPlaylist}>{footer}</div>}
            </div>
        </div>
    );
};
export default Modal