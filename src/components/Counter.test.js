import Enzyme, { shallow ,mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import Counter from './Counter';


Enzyme.configure({ adapter: new EnzymeAdapter() });


const setup = () => mount(<Counter initialState={0}/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);



  
test("initial count 0", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
});

describe('form', () => {
    const wrapper = setup();
    const form = findByTestAttr(wrapper, "component-form");
    test("renders form", () => {
        expect(form.length).toBe(1);
    });
    test("submitting form", () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        form.simulate('submit', fakeEvent);
        const count = findByTestAttr(wrapper, "count").text();
        expect(count).toBe("0");
    })

})

describe("buttons",() => {
    const wrapper = setup();
    const incrementBtn = findByTestAttr(wrapper, "increment-button");
    const decrementBtn = findByTestAttr(wrapper, "decrement-button");
    const submitBtn = findByTestAttr(wrapper,"submit-button");
    test("renders submit button", () => {
        expect(submitBtn.length).toBe(1);
    });
    test("renders increment button", () => {
        expect(incrementBtn.length).toBe(1);
    });
    test("renders decrement button", () => {
        expect(decrementBtn.length).toBe(1);
    });
    test("click decrement btn",() => {
        decrementBtn.simulate('click');
        const count = findByTestAttr(wrapper, "count").text();
        expect(count).toBe("-1");
    });
    test("click increment btn",() => {
        incrementBtn.simulate('click');
        const count = findByTestAttr(wrapper, "count").text();
        expect(count).toBe("0");
    });  
})











