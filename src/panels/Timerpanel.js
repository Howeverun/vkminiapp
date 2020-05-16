import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import PropTypes from "prop-types";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS} from "@vkontakte/vkui";

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

const timerPanel = ({ id, navigator }) => (
	<Panel id={id}>
		<PanelHeader>
		    timeeeer
		</PanelHeader>
		<Group title="Параметры">
			<Div>
				{JSON.stringify(navigator.params)}
			</Div>
		</Group>
		<Group title="Timer">
			<Button onClick={countdown}> Начать таймер </Button>
			<Div id={"time"}>

			</Div>
			<Div id={"notify"}>

			</Div>
		</Group>
	</Panel>
);
/*
const timerPanel = ({ id, navigator })  => (
    <Panel id={id}>
        <PanelHeader>

         timeeeer
        </PanelHeader>
            AAAAAAA
    </Panel>
    /*ReactDOM.render(
        <div style={{
            border: "8px solid",
            borderImage: "linear-gradient(-45deg, #743ad5, #d53a9d) 1"
        }}>
            Время:<br/>
            {new Date().toLocaleTimeString()}
        </div>, document.getElementById('root'));
}, 1000); */

//);


export default timerPanel;