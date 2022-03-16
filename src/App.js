import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Radio from 'components/atoms/Radio/Radio';
import AuthLayout from 'components/layouts/AuthLayout';

function App() {
  return (
    <div className="App">
      <Button>Manage Widgets</Button>
      <Input type='text' />
      <Radio type='checkbox' label='Checkbox' />
      <AuthLayout />
    </div>
  );
}

export default App;
