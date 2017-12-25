const profile = require('../AboutProfile.json');
import test from 'ava';
import { reducerTest } from 'redux-ava';
import aboutReducer from '../AboutReducer';
import { addAbout } from '../AboutActions';

test('action for ADD_ABOUT is working', reducerTest(
	aboutReducer,
	{ data: {} },
	addAbout(),
	{ data: profile },
));
