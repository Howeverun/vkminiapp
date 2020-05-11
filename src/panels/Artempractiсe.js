import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Tooltip from '@vkontakte/vkui/dist/components/Tooltip/Tooltip';
import { FormLayout, FormLayoutGroup, Input, Checkbox, Link } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { View } from '@vkontakte/vkui';


import persik from '../img/screen6.jpg';
import './Persik.css';


const osName = platform();


function startalert() {
    let timerId = setInterval(() => alert('tick'), 2000);
    }
function stopatert() {
//setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
    }

const Artempractiсe = ({ id, go, fetchedUser }) => (
<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={() => navigator.go("panel1")} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
			Artempractiсe
		</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik" >
					Show me the Persik, please
				</Button>
                <p align="center"> </p>
				<Button size="xl" level="2" onClick={go} data-to="secondpersik">
					Show me the Gif, please
				</Button>
				<p align="center"> </p>
				<Button size="xl" level="2" onClick={startalert}>
					запуск таймера(начнётся вывод уведомлений, как на телефонах хз)
				</Button>
				<p align="center"> </p>




			</Div>
		</Group>
	</Panel>
);

Artempractiсe.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Artempractiсe;
