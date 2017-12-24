import test from 'ava';
import { actionTest } from 'redux-ava';

import {
	ADD_ABOUT,
	addAbout,
} from '../AboutActions';

const about = { biography: 'This is my biography' };

test('should return the correct type for addAbout', actionTest(
	addAbout,
	{ type: ADD_ABOUT },
));
