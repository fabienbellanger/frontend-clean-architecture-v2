import { setActivePinia, createPinia } from 'pinia';

describe('sale store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('initial state', () => {
        // FIXME: Not work
        // const store = useSaleStore();
        //
        // expect(store.loading).toBeFalsy();
        // expect(store.sale).toBeUndefined();
    })
});
