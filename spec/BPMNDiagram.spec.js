import {BPMNDiagram} from '../src/index';
describe('BPMNDiagram', () => {
    it('should create instance', () => {
        const diagram = new BPMNDiagram();
        expect(diagram).toBeTruthy();
    });
});