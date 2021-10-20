/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 375px;
    margin: 0 auto;
    background-color: #fff;
  `,
}

function App() {
  return (
    <div css={styles.container}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
