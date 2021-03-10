import { blue, green } from '@material-ui/core/colors';

const wrapper = {
  display: 'flex',
  flexDirecrion: 'row',
  height: '91vh',
};
const center = {
  paddingTop: '20vh',
  textAlign: 'center',
  width: '40vw',
  backgroundColor: '#3f79c9',
};
const side = {
  backgroundColor: '#e8f5e9',
  width: '30vw',
  background: 'linear-gradient(0.25turn, #bbdefb, #3f79c9)',
};
const otherSide = {
  width: '30vw',
  background: 'linear-gradient(0.25turn, #3f79c9, #e8f5e9)',
};
const content = {
  color: '#393546',
  fontSize: 30,
};
const MainView = () => {
  return (
    <div style={wrapper}>
      <div style={side}></div>
      <div style={center}>
        <h3 style={content}>Welcome to PhoneBook APP</h3>
        <h4 style={content}>to continue LOG IN or SIGN UP</h4>
      </div>
      <div style={otherSide}></div>
    </div>
  );
};

export default MainView;
