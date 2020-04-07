function updateCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Изменение";
    const id = $routeParams.id;


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
            if(field!=='dateDostavki'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
            }
        }
    };

    vm.sendForm = function () {

        vm.error = '';
        console.log('waiting...');
        let p1 = $http.put('/api/zakaz/' + id, {
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
    };

    function init() {

        vm.error = '';
        console.log('waiting...');


        let p1 = $http.get('/api/zakaz/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            const oneRow = res.data;
            vm.formModel.fio.value = oneRow.fio;
            vm.formModel.adress.value = oneRow.adress;
            vm.formModel.dostavshik.value = oneRow.dostavshik;
            vm.formModel.tel.value = oneRow.tel;
            vm.formModel.dateDostavki.value = new Date(oneRow.dateDostavki);
            vm.formModel.zakaz.value = oneRow.zakaz;
            vm.validate();
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
        });
    }
    init();
}