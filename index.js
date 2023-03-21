import { Wizard } from "@blockswaplab/lsd-wizard";

import ethers from "ethers";

//install frame.sh to connect from the cli
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:1248");

const blsPublicKey =
    "8a21661db21d862afd9e8f87caefbe635d9b97eace8ebeb858586aaa80621aac7cfccbcbb76bfd7dd27971f249dbd38d"; // greg's bls key
const main = async () => {
    const signer = await provider.getSigner();

    const wizard = new Wizard({
        signer: signer, // signer or provider
        liquidStakingManagerAddress: "0xd317c97545be1ad598af0ca60412d6bf05dacd43", //LLSS details
        feesAndMevPoolAddress: "0x868afeddd1f5919e906bf396d115f19c17a0ba3d",
        savETHPoolAddress: "0x44cd01d41c49e49f9df6e6812c2c8131c3491e96",
    });
    try {
        await wizard.feesAndMevPool.depositETHForStaking(
          blsPublicKey,
          ethers.utils.parseEther("0.01"),
          ethers.utils.parseEther("0.01")
        );

    } catch (e) {
        console.log(e);
    }

};

main();
