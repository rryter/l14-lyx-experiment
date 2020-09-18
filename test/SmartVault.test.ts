import { Contract } from "ethers";
import { deployContract, MockProvider } from "ethereum-waffle";
import SmartVault from "../build/contracts/SmartVault.json";

describe("SmartVault", () => {
  const [wallet, walletTo] = new MockProvider().getWallets();
  let vault: Contract;

  beforeEach(async () => {
    vault = await deployContract(wallet, SmartVault);
  });

  it("Initial balance is 0", async () => {
    expect(await vault.getBalance()).toEqBN(0);
  });
});
