import About from '@/views/About';
import { mount } from '@vue/test-utils';

describe('About.vue', () => {
    test('renders inner text', () => {
        const wrapper = mount(About);
    });
});