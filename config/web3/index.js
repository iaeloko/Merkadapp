import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

const ethblockchain = 1;

const polygonblockchain = 137;

export const connector = new InjectedConnector({
    supportedChainIds : [ ethblockchain,polygonblockchain]

})

export const getLibrary = (provider) => {
    const library = new Web3(provider)
    return library
}
