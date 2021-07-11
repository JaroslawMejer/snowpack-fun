import './app.sass';
import { Cell } from './components/Cell';
import { Table } from './components/Table';

export const App = () => {
  return (
    <div className='App'>
      <Table>
        <Cell elIndex={1} />
        <Cell elIndex={2} />
        <Cell elIndex={2} />
      </Table>
    </div>
  );
};
