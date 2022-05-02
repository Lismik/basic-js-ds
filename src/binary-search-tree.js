const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.list = null
    }

    root() {
        return this.list
    }

    add(data) {
        this.list = addInside(this.list, data)

        function addInside(node, data) {
            if (!node) return new Node(data)
            if (node.data === data) return node
            if (data < node.data) {
                node.left = addInside(node.left, data)
            } else {
                node.right = addInside(node.right, data)
            }
            return node;
        }
    }

    has(data) {
        return searchInside(this.list, data);

        function searchInside(node, data) {
            if (!node) return false
            if (node.data === data) return true
            if (data < node.data) {
                return searchInside(node.left, data)
            } else {
                return searchInside(node.right, data)
            }
        }
    }

    find(data) {
        return findInside(this.list, data)

        function findInside(node, data) {
            if (!node) return null
            if (node.data === data) return node
            if (data < node.data) {
                return findInside(node.left, data)
            } else {
                return findInside(node.right, data)
            }
        }
    }

    remove(data) {
        this.list = removeFromTree(this.list, data)

        function removeFromTree(node, data) {
            if (!node) return null
            if (data < node.data) {
                node.left = removeFromTree(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeFromTree(node.right, data)
                return node
            } else {
                if ((!node.left) && (!node.right)) return null
                if (!node.left) {
                    node = node.right
                    return node
                }
                if (!node.right) {
                    node = node.left
                    return node
                }
                let minFromRight = node.right
                while (minFromRight.left) minFromRight = minFromRight.left
                node.data = minFromRight.data
                node.right = removeFromTree(node.right, minFromRight.data)
                return node
            }
        }
    }

    min() {
        if (!this.list) return
        let node = this.list
        while (node.left) node = node.left
        return node.data
    }

    max() {
        if (!this.list) return
        let node = this.list
        while (node.right) node = node.right
        return node.data
    }
}

module.exports = {
    BinarySearchTree
};
