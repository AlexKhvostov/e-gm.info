if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');

    const ethereumButton = document.querySelector('#connectmm');
    const showAccount = document.querySelector('#UserWallet');

    ethereumButton.addEventListener('click', () => {
        getAccount();
    });

    async function getAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        showAccount.value = account.slice(0,8)+"..."+account.slice(-6);
        console.log("connection:",  ethereum.isConnected())
    }
}else {
    console.log('MetaMask is not installed!');
}



