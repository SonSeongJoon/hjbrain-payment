import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useNavigate 및 useLocation 가져오기

export default function PaymentSidebar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const navigate = useNavigate();
	const location = useLocation(); // 현재 경로 가져오기

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleClickOutside = (event) => {
		if (
			isDropdownOpen &&
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsDropdownOpen(false);
		}
	};

	const handleMenuClick = (path) => {
		navigate(`payment/${path}`);
	};

	// 현재 경로에서 "/payment/" 다음의 경로 추출
	const currentPath = location.pathname.replace('/payment/', '');

	// 컴포넌트가 마운트될 때 클릭 이벤트 핸들러 추가
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isDropdownOpen]);

	return (
		<div className='h-full min-w-[250px] p-3 border-r border-slate-900/10 dark:border-slate-50/[0.06] select-none mb-2 bg-white p-4 text-gray-800'>
			<div className='mb-5'>
				<h1 className='text-2xl font-semibold mb-3'>전자결재</h1>
				<div
					className={`hover:bg-gray-200 cursor-pointer p-2 rounded-lg mb-2 ${
						currentPath === 'write' ? 'font-bold' : ''
					}`}
					onClick={() => handleMenuClick('write')}
				>
					<p className="hover:text-gray-500">작성하기</p>
				</div>
				<div
					className={`hover:bg-gray-200 cursor-pointer p-2 rounded-lg mb-2 ${
						currentPath === 'wait' ? 'font-bold' : ''
					}`}
					onClick={() => {
						toggleDropdown();
						handleMenuClick('wait');
					}}
				>
					<p
						className={`cursor-pointer text-gray-600 hover:text-gray-500 ${
							isDropdownOpen ? 'font-bold' : ''
						}`}
					>
						개인결재함
					</p>
				</div>
				<div
					ref={dropdownRef}
					className={`overflow-hidden transition-all ease-in-out duration-300 bg-gray-100 rounded-lg ${
						isDropdownOpen ? 'max-h-40' : 'max-h-0'
					}`}
				>
					<div>
						<p
							className={`text-sm mb-1 hover:bg-gray-200 p-2 rounded-lg ${
								currentPath === 'wait' ? 'font-bold' : ''
							}`}
							onClick={() => handleMenuClick('wait')}
						>
							대기
						</p>
						<p
							className={`text-sm mb-1 hover:bg-gray-200 p-2 rounded-lg ${
								currentPath === 'reject' ? 'font-bold' : ''
							}`}
							onClick={() => handleMenuClick('reject')}
						>
							반려
						</p>
						<p
							className={`text-sm hover:bg-gray-200 p-2 rounded-lg ${
								currentPath === 'approval' ? 'font-bold' : ''
							}`}
							onClick={() => handleMenuClick('approval')}
						>
							승인
						</p>
					</div>
				</div>
				<div
					className={`hover-bg-gray-200 cursor-pointer p-2 rounded-lg mb-2 ${
						currentPath === 'receiveList' ? 'font-bold' : ''
					}`}
					onClick={() => handleMenuClick('receiveList')}
				>
					<p className="hover:text-gray-500">수신함</p>
				</div>
				<div
					className={`hover:bg-gray-200 cursor-pointer p-2 rounded-lg ${
						currentPath === 'saveList' ? 'font-bold' : ''
					}`}
					onClick={() => handleMenuClick('saveList')}
				>
					<p className="hover:text-gray-500">결재예정문서</p>
				</div>
			</div>
		</div>
	);
}
