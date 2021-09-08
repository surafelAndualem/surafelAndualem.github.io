var accountList = [];


var bankAccount = (function () {
    var account = function (name, deposit) {
        this.name = name;
        this.deposit = deposit;
    };
    var createAccount = function (name, deposit) {
        return new account(name, deposit);
    };

    var searchByName = function (name, element) {
        return element.name === name;
    };


    var operationAccount = function () {
        let name = document.getElementById('name').value;
        let deposit = parseFloat(document.getElementById('deposit').value);
        var account = createAccount(name, deposit);
        var searchAccount =
            (accountList
                    .filter(function (element) {
                        return searchByName(name, element);
                    }).map(function (element) {
                        element.deposit += parseFloat(deposit);
                    }
                ));
        if(searchAccount === undefined || searchAccount.length === 0){
            accountList.push(account);
        }
        console.log(accountList);
        refreshTextArea();
    };

    var refreshTextArea = function () {
        var textArea = document.getElementById('txtArea');
        var string = "";
        accountList.forEach(function (element) {
            string  +="Account Name:"+ element.name + " Balance: " + element.deposit +"\n";
        });
        textArea.textContent = string;
    };


    return {
        createAccount: createAccount,
        operationAccount: operationAccount
    };
})();