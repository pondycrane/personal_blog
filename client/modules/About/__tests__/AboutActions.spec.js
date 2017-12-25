import test from 'ava';
import { actionTest } from 'redux-ava';

import {
	ADD_ABOUT,
	addAbout,
} from '../AboutActions';

test('should return the correct type for addAbout', actionTest(
	addAbout,
	{ type: ADD_ABOUT },
));
