import reducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('reducer', () => {
	it('should set the initial state when nothing is passed in for state and action', () => {
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
	});

	it('should return the current state if action is unknown', () => {
		let currentState = {};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	it('should generate aural updates', () => {
		let state = {
            guesses: [4, 25, 39],
            feedback: "You're Warm.",
            auralStatus: ''
        };

        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 39, 25, 4"
        );
	});

	describe('MAKE_GUESS', () => {
		it('should be able to make a guess', () => {
			let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 85
            };

            state = reducer(state, makeGuess(33));
            expect(state.guesses).toEqual([33]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(49));
            expect(state.guesses).toEqual([33, 49]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(68));
            expect(state.guesses).toEqual([33, 49, 68]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(92));
            expect(state.guesses).toEqual([33, 49, 68, 92]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(85));
            expect(state.guesses).toEqual([33, 49, 68, 92, 85]);
            expect(state.feedback).toEqual('You got it!');
		});
	});

	describe('restartGame', () => {
		it('should be able to start a new game', () => {
			let state = {
                guesses: [33, 49, 68, 92],
                feedback: 'Hot',
                correctAnswer: 56
            };

            const correctAnswer = 77;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
		});
	});
});