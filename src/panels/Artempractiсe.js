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

const osName = platform();

function abs(){


}

const Artempractiсe = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Artempractiсe
		</PanelHeader>



<p align="center"> </p>
				/////////////////////
				<p align="center"> </p>
				<p align="center"> </p>

          <Cell>Hello</Cell>
          <Cell>World</Cell>
        <FormLayout>
          <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
            <Input type="password" placeholder="Введите пароль" />
            <Input type="password" placeholder="Повторите пароль" />
          </FormLayoutGroup>
        </FormLayout>

          <Tooltip text="ъеъ">
            <Button size="l" level="2" onClick="abs()" data-to="home">
            Друзья </Button>
          </Tooltip>


              <PanelHeader>Checkbox</PanelHeader>
              <FormLayout>
                <Checkbox>Я согласен со всем, что вы <Link >там</Link> понаписали</Checkbox>
              </FormLayout>



            <FormLayout>
              <FormLayoutGroup top="Фамилия">
                <Input type="text" defaultValue="Петров" />
                <Input type="text" defaultValue="Иванов" align="center" />
                <Input type="text" defaultValue="Сидоров" align="right" />
              </FormLayoutGroup>
            </FormLayout>

                <p align="center"> </p>
                <p align="center"> </p>
				/////////////////////


		</Panel>
);

Artempractiсe.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Artempractiсe;
