
// account is not optional
import {web3Provider} from "./providers";
import {ethers} from "ethers";

export function getSigner(account) {
    const provider = web3Provider()
    return provider.getSigner(account).connectUnchecked()
}

export function isAddress(address) {
    return ethers.utils.isAddress(address)
}

export function toChecksumAddress(address) {
    return ethers.utils.getAddress(address)
}