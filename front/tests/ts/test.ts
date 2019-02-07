import { assert } from 'chai';
import Fuga from '@/hoge/fuga';

describe('test', () => {
    it('run', () => {
        assert.equal(new Fuga().fuga(), 1);
    });
});
