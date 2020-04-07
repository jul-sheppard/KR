function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление";

    vm.formWasValidated = false;

    vm.formModel = {
        fio: {
            valid: true,
            infoText: '',
            value: ''
        },
        adress: {
            valid: true,
            infoText: '',
            value: ''
        },
        dostavshik: {
            valid: true,
            infoText: '',
            value: ''
        },
        tel: {
            valid: true,
            infoText: '',
            value: ''
        },
        dateDostavki: {
            valid: true,
            infoText: '',
            value: new Date()
        },
        zakaz: {
            valid: true,
            infoText: '',
            value: ''
        },
    };
    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;

        for (let field in vm.formModel){
            if(field!=='dateDostavki' && field!=='tel'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };
    vm.sendForm = function () {

        vm.error = '';

        console.log('waiting...');
        let p1 = $http.post('/api/zakaz', {
            fio: vm.formModel.fio.value,
            adress: vm.formModel.adress.value,
            dostavshik: vm.formModel.dostavshik.value,
            tel: vm.formModel.tel.value,
            dateDostavki: vm.formModel.dateDostavki.value,
            zakaz: vm.formModel.zakaz.value,
        }, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }
}