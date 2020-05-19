import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import PropTypes from "prop-types";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import { platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


const osName = platform();




function countdown(){
	let division = document.getElementById("time")
	let notify = document.getElementById("notify")
	let sec = 0;
	let min = 0;
	let min_to = 25;
	let next_min = 2;
	setInterval(function() {
		let first = ""
		let second = ""
		if(min<10){
			first = "0"
		}
		if(sec<10){
			second = "0"
		}
		division.textContent = first + min + " : " + second + sec;

		if(sec === 59){
			sec = 0;
			min++;
			if (min===min_to){
				notify.textContent = "Vse"
				min = 0;
				sec = 0;
			}
		}
		sec++;

	}, 1000)
}


const timerPanel = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Persik
		</PanelHeader>
					<Button onClick={countdown}> Начать таймер </Button>
	</Panel>
);

timerPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};



export default timerPanel;