// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import { AxelarExecutable } from "@axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGasService } from "@axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import { IAxelarGateway } from "@axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";

contract SendMsg is AxelarExecutable {

    IAxelarGasService public immutable gasService;
    
    string public message;

    constructor(address _getWay, address _gasService) AxelarExecutable(_getWay) {
        gasService = IAxelarGasService(_gasService);
    }
    
    function sendMsg(
        string memory destinationChain,
        string memory contractAddress,
        string memory _message
    ) external payable {
        bytes memory payload = abi.encode(_message);
        gasService.payNativeGasForContractCall{value: msg.value} (
            address(this),
            destinationChain,
            contractAddress,
            payload,
            msg.sender
        );

        gateway.callContract(destinationChain, contractAddress, payload);
    }

    function _execute(
    string calldata sourceChain,
    string calldata sourceAddress,
    bytes calldata _payload
    ) internal override {
        message = abi.decode(_payload, (string));
    }



}

