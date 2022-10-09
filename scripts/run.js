/** 
 * Notes. This file is basically like a public api endpoint
 * Only users who validate their crypto wallet are able to access or 
 * interact with smart contracts
 * */ 

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");  // compiles our code
    const waveContract = await waveContractFactory.deploy();  // deploys the contract to the blockchain
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    await waveContract.getTotalWaves();

    const waveTxn = await waveContract.wave();
    await waveTxn.wait();

    await waveContract.recordWaver(owner.address);  // store the address
    

    await waveContract.getTotalWaves();

    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait();

    await waveContract.recordWaver(randomPerson.address);  // store the address


    await waveContract.getTotalWaves();
};

const runMain = async () => {
    try{
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }

};

runMain();