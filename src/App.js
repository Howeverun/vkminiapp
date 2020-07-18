
import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import SecondPersik from './panels/Secondpersik';
import Artempractiсe from './panels/Artempractiсe';
import Artempractiсe2 from './panels/Artempractiсe2';
import Boryapractiсe from './panels/Boryapractiсe';
import Dashapractiсe from './panels/Dashapractiсe';
import Linapractiсe from './panels/Linapractiсe';
//##########
import Timerpanel from './panels/Timerpanel';
//##########
import { Stack, Page, Tabbar } from "vkui-navigator/dist";

import Panel1 from "./panels/Panel1";
import Panel2 from "./panels/Panel2";
import Panel3 from "./panels/Panel3";
import Panel4 from "./panels/Panel4";
import Modal1 from "./panels/Modal1";
import Modal2 from "./panels/Modal2";


import Icon24Services from "@vkontakte/icons/dist/24/services";
import Icon24Flash from "@vkontakte/icons/dist/24/flash";

    bridge.send("VKWebAppInit", {});
    bridge.send("VKWebAppAllowNotifications", {});



const App = () => (


	<Stack
		activePage="main"
		modals={[
			<Modal1 id="modal1"/>,
			<Modal2 id="modal2" title="Название из title"/>
		]}
	>

		<Tabbar  //нижние main-тапбары
			id="main"
			activeStory="home"
		>
			<Page //первый тапбар
				id="home"
				title="Основы"
				activePanel="panel1"
				icon={<Icon24Services/>}
			>
				<Panel1 id="panel1"/>
				<Panel2 id="panel2"/>
				<Timerpanel id="Timerpanel"/>
				<Artempractiсe id="Artempractiсe"/>
			</Page>

			<Page //второй тапбар
				id="settings"
				title="Модальные окна"
				activePanel="panel3"
				icon={<Icon24Flash/>}
			>
				<Panel3 id="panel3"/>
			</Page>

		</Tabbar>

	</Stack>


);

export default App;

