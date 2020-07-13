import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Secondpersik from './panels/Secondpersik';
import Artempractiсe from './panels/Artempractiсe';
import Boryapractiсe from './panels/Boryapractiсe';
import Dashapractiсe from './panels/Dashapractiсe';
import Linapractiсe from './panels/Linapractiсe';
import Timerpanel from './panels/Timerpanel';
import Intro from './panels/Intro';


const ROUTES = {
	HOME: 'Home',
	INTRO: 'Intro',
};


const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO); //стартовая страница
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);//useState(<ScreenSpinner size='large'/>);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Secondpersik id='secondpersik' go={go} />
			<Artempractiсe id='artempractiсe' go={go} />
			<Boryapractiсe id='boryapractiсe' go={go} />
			<Dashapractiсe id='dashapractiсe' go={go} />
			<Linapractiсe id='linapractiсe' go={go} />
			<Timerpanel id='timerpanel' go={go} />

			<Intro id='intro' go={go} />
		</View>
	);
}

export default App;
