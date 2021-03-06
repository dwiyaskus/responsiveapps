import { createGlobalStyle } from 'styled-components';
import responsive from './utilities';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${responsive(24)};

      @media (min-width: 768px) {
        font-size: ${responsive(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${responsive(16)};
      }
    }
`;

export default Global;
