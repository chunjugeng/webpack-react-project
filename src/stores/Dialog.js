import {runInAction, action, observable} from 'mobx';
export default new class Dialog {
    @observable
    app = {
        isOpenDialog: false
    }

    constructor() {
        Object.assign(this.app, this.app);
    }

    @action
    openDialog =() => {
        runInAction(()=> {
            this.app.isOpenDialog = true;
        });
    }

    disabledDefaultEvent = (ev) => {
        let el = ev.currentTarget;
        ev.stopPropagation();
        return false;
    }

    @action
    closeDialog = (ev) => {
        // ev.currentTarget.style.transition = 'all 0.6s ease-out';
        runInAction(()=> {
            this.app.isOpenDialog = false;
        });
        
    }
}