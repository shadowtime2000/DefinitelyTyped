import addIterations from 'css-ast-iterations';
import { parse } from 'css';

const ast = addIterations(parse(".css{code:here;}"))