const { ethers } = require("ethers")

async function main() {
    const [deployer] = await ethers.getSigners()

    console.log("Deploying contracts with the account:", deployer.address)
    console.log("Account balance:", (await deployer.getBalance()).toString())

    const Token = await ethers.getContractFactory("WavePlace")
    const token = await Token.deploy({value: hre.ethers.utils.parseEther("100")})
    await token.deployed()

    console.log("WavePlace address:", token.address)

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })