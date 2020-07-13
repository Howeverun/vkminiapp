import React from "react";
import { Component } from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import { Redirect } from 'react';

const Panel1 = ({ id, navigator }) => {
	const showSpinner = () => {
		navigator.showLoader();
		setTimeout(() => navigator.hideLoader(), 2500);
	};


	const loadData = () => {
		navigator.showLoader();
		fetch("https://api.github.com/repos/hit2hat/vkui-navigator")
			.then((result) => result.json())
			.then((result) => {
				navigator.go("panel2", {
					owner: result.owner && result.owner.login,
					description: result.description
				});
			})
			.catch(() => navigator.hideLoader())
	};

	return (
		<Panel id={id}>
			<PanelHeader>
				Artempractice 1
			</PanelHeader>
			<Group title="Основы навигации">
				<Div style={{ display: "grid", gridRowGap: "10px" }}>
				    <Redirect to="https://oauth.vk.com/authorize?client_id=7450214&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52" />
				    <Link to="https://oauth.vk.com/authorize?client_id=7450214&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52" />;
					<Button
						size="xl"
						onClick={() => navigator.go("Panel2")}
					>
						Перейти на панель 2
					</Button>
					<Button
						size="xl"
						onClick={() => navigator.go("panel2", { id: "someid", data: [ 0, 1, 2 ] })}
					>
						Перейти на панель 2 + параметры
					</Button>
					<Button
						size="xl"
						onClick={loadData}
					>
						Перейти на панель 2 + загрузка данных
					</Button>

					<Button
						size="xl"
						onClick={showSpinner}
					>
						Показать спиннер (исчезнет сам)
					</Button>
				</Div>
			</Group>

			<Group title="Страницы">
				<Div style={{ display: "grid", gridRowGap: "10px" }}>
					<Button
						size="xl"
						onClick={() => navigator.goPage("page2")}
					>
						Показать Page2
					</Button>
					<Button
						size="xl"
						onClick={() => navigator.goPage("page2", { param1: "hello" })}
					>
						Показать Page2 + параметры
					</Button>
				</Div>
			</Group>
		</Panel>

	);
};

export default Panel1;