if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');

    const ethereumButton = document.body.querySelector('#connectmm');
    const showAccount = document.body.querySelector('#UserWallet');

    ethereumButton.addEventListener('click', () => {

        getAccount();
    });

    async function getAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        showAccount.textContent = account.slice(0,8)+"..."+account.slice(-6);
        console.log(showAccount);
        console.log(ethereumButton);

        ethereumButton.classList.add("hidden");
        showAccount.classList.add("active")


        console.log("connection:",  ethereum.isConnected())
    }
}else {
    console.log('MetaMask is not installed!');
}



