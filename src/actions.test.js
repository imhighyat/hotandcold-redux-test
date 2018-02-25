import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('generateAuralUpdate', () => {
	it('should return the action with the correct type', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});

describe('restartGame', () => {
	it('should return the action with the correct type and answer', () => {
		const rightAnswer = 25;
		const action = restartGame(rightAnswer);
		expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(rightAnswer);
	});
});

describe('makeGuess', () => {
	it('should return the action with the correct type and guess', () => {
		const guess = 25;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});