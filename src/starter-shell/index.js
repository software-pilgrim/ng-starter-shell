"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.starterShell = void 0;
function starterShell(_options) {
    return (tree, _context) => {
        tree.create(_options.name || 'hello', 'world');
        return tree;
    };
}
exports.starterShell = starterShell;
//# sourceMappingURL=index.js.map