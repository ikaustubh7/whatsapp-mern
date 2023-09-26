import React from 'react'
import "./Sidebar.css"
import {DonutLarge, SearchOutlined} from "@mui/icons-material";
import { Avatar ,IconButton} from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from "./SidebarChat";
//import {SearchOutlined} from "@mui/icons-material";
//import SvgIcon from '@mui/material/SvgIcon';


function Sidebar() {
    return (<div className="Sidebar">
             <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined className="MuiSVgIcon-root"/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>

            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>

         </div>
    );
}

export default Sidebar;
