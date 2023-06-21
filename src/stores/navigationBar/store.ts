import { IStore } from '../../helper/storeHelper';
import { action, makeObservable, observable, runInAction } from 'mobx';

interface INavigationBarStore {
    visible: boolean;
}

const initialState: INavigationBarStore = {
    visible: false,
};

class NavigationBarStore implements IStore {
    visible = initialState.visible;

    constructor() {
        makeObservable(this, {
            visible: observable,
            
            setVisible: action.bound,
            clear: action.bound,
        });
    };

    setVisible(showType: boolean) {
        runInAction(() => {
            this.visible = showType;
        });
    }

    clear() {
        runInAction(() => {
            this.visible = initialState.visible;
        });
    }
}

const navigationBarStore = new NavigationBarStore();
export default navigationBarStore;