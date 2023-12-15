import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbFilePencil } from "react-icons/tb";
import { TbFileDollar } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import SidebarContent from "../component/SidebarContent";

function SidebarItem({ isSidebarOpen, icon, text, to, closeSidebar, handleClick, isSelected }) {
   const navigate = useNavigate();

   const handleItemClick = () => {
      if (to) {
         navigate(to);
         closeSidebar();
         handleClick(text);
      }
   };

   const activeClass = isSelected
      ? `py-1 dark:bg-slate-700 text-gray-700 dark:text-white font-bold shadow-lg border-l-4 border-gray-800 rounded dark:border-slate-400 px-1}`
      : '';

   return (
      <Link to={to} className={`flex w-full items-center mb-[20px] ${activeClass}`} onClick={handleItemClick}>
         {icon && React.cloneElement(icon)}
         {isSidebarOpen && text && <div>{text}</div>}
      </Link>
   );
}

export default function Sidebar({ isSidebarOpen, closeSidebar }) {
   const location = useLocation();
   const [selectedContent, setSelectedContent] = useState('');

   useEffect(() => {
      const pathSegments = location.pathname.split('/').filter(segment => segment);
      if (pathSegments.length > 0) {
         setSelectedContent(pathSegments[0]);
      }
   }, [location]);

   const handleContentClick = (content) => {
      setSelectedContent(content);
      closeSidebar();
   };

   return (
      <div className='flex h-full'>
         <div className={`flex flex-col pt-5 px-3 h-full items-center dark:bg-slate-900 dark:text-slate-400 sm:drop-shadow-none border-r drop-shadow-[4px_4px_3px_rgba(0,0,0,0.15)] backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 ${isSidebarOpen ? 'w-[190px]' : ''}`}>
            <SidebarItem
               isSidebarOpen={isSidebarOpen}
               icon={<MdOutlineSpaceDashboard size={32} className='mr-2 text-primary dark:text-slate-400' />}
               text='Dashboard'
               to="/dash"
               closeSidebar={closeSidebar}
               handleClick={() => handleContentClick('dash')}
               isSelected={selectedContent === 'dash'}
            />

            <SidebarItem
               isSidebarOpen={isSidebarOpen}
               icon={<MdOutlinePeopleOutline size={32} className='mr-2 text-primary text-center inline-flex items-center justify-center w-30 h-30 dark:text-slate-400' />}
               text='ICHAT'
               to="/ichat"
               closeSidebar={closeSidebar}
               handleClick={() => handleContentClick('ichat')}
               isSelected={selectedContent === 'ichat'}
            />

            <SidebarItem
               isSidebarOpen={isSidebarOpen}
               icon={<TbFilePencil size={32} className='mr-2 text-primary dark:text-slate-400' />}
               text='전자결재'
               to="/payment"
               closeSidebar={closeSidebar}
               handleClick={() => handleContentClick('payment')}
               isSelected={selectedContent === 'payment'}
            />

            <SidebarItem
               isSidebarOpen={isSidebarOpen}
               icon={<TbFileDollar size={32} className='mr-2 text-primary dark:text-slate-400' />}
               text='전자세금계산서'
               to="/tax"
               closeSidebar={closeSidebar}
               handleClick={() => handleContentClick('tax')}
               isSelected={selectedContent === 'tax'}
            />
         </div>
         <div>
            <SidebarContent selectedContent={selectedContent}/>
         </div>
      </div>
   );
}
