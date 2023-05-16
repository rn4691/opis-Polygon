// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract UniqueIdCheck {
    
    mapping(uint256 => bool) private _idExists;
    
    // event IdExists(uint256 indexed id);
    // event IdDoesNotExist(uint256 indexed id);
    
    function checkIfIdExists(uint256 id) public view returns (bool) {
        if (_idExists[id]) {
            return true;
        } else {
            return false;
        }
    }
    
    function addId(uint256 id) public {
        require(!_idExists[id], "ID already exists");
        _idExists[id] = true;
    }
    
    function removeId(uint256 id) public {
        require(_idExists[id], "ID does not exist");
        _idExists[id] = false;
    }
}