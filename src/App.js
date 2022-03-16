import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import AuthLayout from 'components/layouts/AuthLayout';
import SendVerification from 'components/molecules/sendVerification/SendVerification';

function App() {
  return (
    <div className="App">
      {/* <Button>Manage Widgets</Button>
      <Input /> */}

      <AuthLayout>
      <SendVerification />
      </AuthLayout>
    </div>
  );
}

export default App;
