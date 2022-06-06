const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    beforeEach(async function () {
        const simpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        const simpleStorage = await simpleStorageFactory.deploy()
    })
})
