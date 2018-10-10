import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.3'
import toJson from 'enzyme-to-json'
import raf from './components/__test__/tempPolyfills'

Enzyme.configure({ adapter: new Adapter })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

console.error = message => {
    throw new Error(message)
}