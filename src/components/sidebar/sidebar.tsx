'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import style from './sidebar.module.scss';
import {
	BurgerIcon,
	CloseIcon,
	DashboardIcon,
	LogoIcon,
	LogoutIcon,
	ProfileIcon,
	SettingsIcon,
	StatisticIcon
} from '@/assets';
import { Typography } from '@/components';

const navItems = [
	{ title: 'dashboard', icon: <DashboardIcon /> },
	{ title: 'profile', icon: <ProfileIcon /> },
	{ title: 'statistic', icon: <StatisticIcon /> },
	{ title: 'settings', icon: <SettingsIcon /> },
	{ title: 'logout', icon: <LogoutIcon /> }
];

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const classNames = {
		sidebar: clsx(style.sidebar, isOpen && style.open),
		sb_liner: clsx(style.sidebar_liner),
		sb_header: clsx(style.sidebar_header),
		burger: clsx(style.burger),
		logo: clsx(style.logo),
		menu: clsx(style.menu),
		sb_button: clsx(style.button)
	};
	return (
		<aside className={classNames.sidebar}>
			<div className={classNames.sb_liner}>
				<header className={classNames.sb_header}>
					<button
						type='button'
						className={classNames.burger}
						onClick={() => setIsOpen(!isOpen)}
					>
						<span>{isOpen ? <CloseIcon /> : <BurgerIcon />}</span>
					</button>
					<Typography
						as={'h2'}
						variant={'heading'}
					>
						Task Planner
					</Typography>
					<LogoIcon className={classNames.logo} />
				</header>
				<nav className={classNames.menu}>
					{navItems.map(({ icon, title }, index) => {
						return (
							<button
								key={index}
								className={classNames.sb_button}
							>
								<span>{icon}</span>
								<Typography as={'p'}>{title}</Typography>
							</button>
						);
					})}
				</nav>
			</div>
		</aside>
	);
};
