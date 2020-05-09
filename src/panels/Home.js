import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

function startalert() {
    let timerId = setInterval(() => alert('tick'), 2000);
    }
function stopatert() {
//setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
    }

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
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
				<Button size="xl" level="2" onClick={go} data-to="artempractiсe">
					Artempractiсe
				</Button>
				<p align="center"> </p>

				<p align="center"> </p>
				<Button size="xl" level="2" onClick={go} data-to="boryapractiсe">
					Boryapractiсe
				</Button>
				<p align="center"> </p>

				<p align="center"> </p>
				<Button size="xl" level="2" onClick={go} data-to="dashapractiсe">
					Dashapractiсe
				</Button>
				<p align="center"> </p>

				<p align="center"> </p>
				<Button size="xl" level="2" onClick={go} data-to="linapractiсe">
					Linapractiсe
				</Button>
				<p align="center"> </p>

			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
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

export default Home;
