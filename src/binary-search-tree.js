const { NotImplementedError } = require( '../extensions/index.js' );

const { Node } = require( '../extensions/list-tree.js' );

function addWithin( node, data ) {
    if ( !node ) {
        return new Node( data );
    }
    if ( node.data === data ) {
        return node;
    }
    if ( data < node.data ) {
        node.left = addWithin( node.left, data );
    } else {
        node.right = addWithin( node.right, data );
    }
    return node;
}

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add( data ) {
        this.rootNode = addWithin( this.rootNode, data );
    }

    has( data ) {
        return have( this.rootNode, data );

        function have( node, data ) {
            if ( !node ) {
                return false;
            }
            if ( data === node.data ) {
                return true;
            } else if ( data < node.data ) {
                return have( node.left, data );
            } else {
                return have( node.right, data );
            }
        }
    }

    find( data ) {
        return toFind( this.rootNode, data );

        function toFind( node, data ) {
            if ( !node ) {
                return null;
            }
            if ( data === node.data ) {
                return node;
            } else if ( data < node.data ) {
                return toFind( node.left, data );
            } else {
                return toFind( node.right, data );
            }
        }
    }

    remove( data ) {
        this.rootNode = toRemove( this.rootNode, data )

        function toRemove( node, data ) {
            if ( !node ) {
                return null;
            }
            if ( data < node.data ) {
                node.left = toRemove( node.left, data );
                return node;
            } else if ( data > node.data ) {
                node.right = toRemove( node.right, data );
                return node;
            } else {
                if (!node.left && !node.right ) {
                    return null;
                }
                if ( !node.left ) {
                    node = node.right;
                    return node;
                }
                if ( !node.right ) {
                    node = node.left;
                    return node;
                }
            }
            let  minFromRight = node.right;
            while ( minFromRight.left ) {
                minFromRight = minFromRight.left;
            }
            node.data = minFromRight.data;
            node.right = toRemove(node.right, minFromRight.data);
            return node
        }
    }

    min() {
        return getMin( this.rootNode );

        function getMin( node ) {
            if ( !node ) {
                return null;
            }
             if ( node.left ) {
                return getMin( node.left );
            }
             return node.data
        }
    }

    max() {
        return getMax( this.rootNode );

        function getMax( node ) {
            if ( !node ) {
                return null;
            }
            if ( node.right ) {
                return getMax( node.right );
            }
            return node.data
        }
    }
}

module.exports = {
    BinarySearchTree
};