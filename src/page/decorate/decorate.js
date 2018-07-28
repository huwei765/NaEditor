import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import _ from 'lodash';

import * as Actions from '../../actions';
import '@component/Messager';
import '../../db/createStore';
import ConfigDialog from '@component/ConfigDialog';
import ModuleList from '@component/ModuleList';
import ModuleBar from '@component/ModuleBar';
import ModuleTagList from '@component/ModuleTagList';
import Canvas from '@component/Canvas';
import DBInit from '@db/dataInitial';
import ModuleNav from '@component/ModuleNav';
import store from '@store';

const pageId = window.BASE_DATA.pageId;


window.resizeIframe = _.debounce(() => {
	let height = document.querySelector('.J_canvas').contentWindow.document.body.scrollHeight + 'px';
	document.querySelector('iframe.J_canvas').style.height = height;
}, 50);


window.addEventListener('load', () => {

	ReactDOM.render(
		(<Provider store={store} >
			<Canvas />
		</Provider>),
		document.querySelector('.J_canvas').contentDocument.querySelector('#Container'));


	ReactDOM.render(
		(
			<Provider store={store}>
				<ConfigDialog store={store} />
			</Provider >
		),
		document.querySelector('.J_configDialog')
	);


	ReactDOM.render(
		<Provider store={store}>
			<ModuleList />
		</Provider >,
		document.querySelector('.J_moduleList')
	);

	ReactDOM.render(
		<Provider store={store}>
			<ModuleBar />
		</Provider>,
		document.querySelector('.J_ModuleBar')
	);

	ReactDOM.render(
		<Provider store={store}>
			<ModuleTagList />
		</Provider>,
		document.querySelector('.J_moduleTagList')
	);


	ReactDOM.render(
		<Provider store={store}>
			<ModuleNav />
		</Provider>,
		document.querySelector('.J_moduleNav')
	);
});